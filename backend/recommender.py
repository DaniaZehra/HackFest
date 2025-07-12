import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(model_name="models/gemini-2.0-flash")

def recommend(wardrobe_list: list, occasion: str) -> str:
    """
    Given a wardrobe list and occasion, returns AI-generated outfit suggestions.
    """

    prompt = f"""
    You are a professional stylist AI assistant.

    Here is the user's wardrobe:
    {', '.join(wardrobe_list)}

    They are dressing for: {occasion}

    Please do the following:
    - Suggest 2 complete outfits (from available items)
    - Assign each outfit a confidence score from 0–100%
    - Recommend 1 budget-friendly thrift item that would improve their wardrobe

    Respond in the following format:
    1. Outfit 1: ...
       Confidence: ...
    2. Outfit 2: ...
       Confidence: ...
    Budget Suggestion: ...
    """

    response = model.generate_content(prompt)
    return response.text
