from flask import Flask, request, jsonify, send_file
from diffusers import DiffusionPipeline
from io import BytesIO
import time
import torch
from functools import lru_cache
import hashlib
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:3000"])


# Load model
pipe = DiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    use_safetensors=True
).to("cpu")

pipe.load_lora_weights("hahminlew/sdxl-kream-model-lora-2.0")

def hash_prompt(prompt):
    return hashlib.sha256(prompt.encode('utf-8')).hexdigest()

# Global prompt hash -> prompt mapping
prompt_cache = {}

# Cache PNG image bytes instead of BytesIO
@lru_cache(maxsize=16)
def generate_image_bytes(prompt_hash):
    prompt = prompt_cache[prompt_hash]
    image = pipe(prompt=prompt, num_inference_steps=7, guidance_scale=7.5).images[0]
    img_io = BytesIO()
    image.save(img_io, 'PNG')
    return img_io.getvalue()  # Only store raw bytes

@app.route('/generate', methods=['POST'])
def generate_image():
    data = request.get_json()
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    try:
        start_time = time.time()
        prompt_hash = hash_prompt(prompt)
        prompt_cache[prompt_hash] = prompt

        img_bytes = generate_image_bytes(prompt_hash)
        
        # Wrap bytes in BytesIO to simulate a file
        img_io = BytesIO(img_bytes)
        img_io.seek(0)

        generation_time = time.time() - start_time
        print(f"Image served in {generation_time:.2f} seconds")

        return send_file(
            img_io,
            mimetype='image/png',
            as_attachment=True,
            download_name='generated_image.png'
        )

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
