'use client'

import React, { useState } from 'react'
import { Heart, Star, ShoppingBag, Sparkles, Eye, MessageCircle, Wand2, Sun, Briefcase, CalendarCheck, Square, Archive, Zap, Gem } from 'lucide-react'

interface User {
  name: string
  avatar: string
  style: string
  budget: number
}

interface AIRecommendationsProps {
  user: User
}

export default function AIRecommendations({ user }: AIRecommendationsProps) {
  const [activeTab, setActiveTab] = useState('browse')
  const [prompt, setPrompt] = useState('')
  const [selectedStyle, setSelectedStyle] = useState('bohemian')
  const [selectedOccasion, setSelectedOccasion] = useState('casual')
  const [isGenerating, setIsGenerating] = useState(false)

  // Add state for chat in Generate Outfits tab
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'ai', content: string}[]>([])
  const [chatInput, setChatInput] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)

  const tabs = [
    { id: 'browse', label: 'Browse Recommendations', icon: Eye },
    { id: 'chat', label: 'Chat with AI', icon: MessageCircle },
    { id: 'generate', label: 'Generate Outfits', icon: Sparkles },
  ]

  const styleOptions = [
    { id: 'bohemian', label: 'Bohemian', icon: Sparkles },
    { id: 'minimalist', label: 'Minimalist', icon: Square },
    { id: 'vintage', label: 'Vintage', icon: Archive },
    { id: 'streetwear', label: 'Streetwear', icon: Zap },
    { id: 'elegant', label: 'Elegant', icon: Gem },
  ]

  const occasions = [
    { id: 'casual', label: 'Casual Day', icon: Sun },
    { id: 'work', label: 'Work Meeting', icon: Briefcase },
    { id: 'party', label: 'Party', icon: Sparkles },
    { id: 'formal', label: 'Formal Event', icon: CalendarCheck },
  ]

  const styleColors: Record<string, string> = {
    bohemian: 'bg-warm-300',
    minimalist: 'bg-warm-100',
    vintage: 'bg-accent-amber',
    streetwear: 'bg-warm-500',
    elegant: 'bg-warm-400',
  }

  // Pre-curated recommendations (from RecommendationCard)
  const recommendations = [
    {
      id: 1,
      title: 'Classic Summer Vibes',
      description: 'Perfect for a casual day out with friends',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop',
      price: 89,
      rating: 4.8,
      likes: 234,
      category: 'casual',
      items: ['Floral Dress', 'Denim Jacket', 'Ankle Boots']
    },
    {
      id: 2,
      title: 'Professional Power Look',
      description: 'Confident and stylish for important meetings',
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&h=500&fit=crop',
      price: 156,
      rating: 4.9,
      likes: 189,
      category: 'work',
      items: ['Blazer', 'White Blouse', 'Pencil Skirt']
    },
    {
      id: 3,
      title: 'Romantic Evening Ensemble',
      description: 'Elegant and sophisticated for date night',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop',
      price: 234,
      rating: 4.7,
      likes: 312,
      category: 'date',
      items: ['Silk Dress', 'Statement Necklace', 'Heels']
    }
  ]


  const filteredRecommendations = recommendations.filter(rec =>
    selectedOccasion === 'all' || rec.category === selectedOccasion
  )

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  // Handler for sending chat message
  const handleSendChat = async () => {
    if (!chatInput.trim()) return
    const userMsg = { role: 'user' as const, content: chatInput }
    setChatMessages((prev) => [...prev, userMsg])
    setIsChatLoading(true)
    setChatInput('')
    // Simulate AI response (replace with API call later)
    setTimeout(() => {
      const aiMsg = { role: 'ai' as const, content: "Here's an AI-generated outfit based on your prompt! (Integration coming soon)" }
      setChatMessages((prev) => [...prev, aiMsg])
      setIsChatLoading(false)
    }, 2000)
  }

  const renderBrowseTab = () => (
    <div className="space-y-6">
      {/* Occasion Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Occasion</h3>
        <div className="flex flex-wrap gap-3 pb-2">
          {occasions.map((occasion) => (
            <button
              key={occasion.id}
              onClick={() => setSelectedOccasion(occasion.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-base border
                ${selectedOccasion === occasion.id
                  ? 'bg-warm-100 border-warm-300 text-warm-700 shadow-warm-md scale-105'
                  : 'bg-white border-warm-200 text-warm-500 hover:bg-warm-50 hover:text-warm-700'}
              `}
            >
              <occasion.icon className="w-5 h-5" />
              <span className="font-medium">{occasion.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="card-warm overflow-hidden hover:shadow-lg hover-scale transition-base"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={recommendation.image}
                alt={recommendation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-warm-100 transition-base hover-scale">
                <Heart className="w-5 h-5 text-warm-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-warm-900">{recommendation.title}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-accent-amber fill-current" />
                  <span className="text-sm text-warm-700">{recommendation.rating}</span>
                </div>
              </div>

              <p className="text-warm-800 text-sm mb-4">{recommendation.description}</p>

              {/* Items */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">Includes:</p>
                <div className="flex flex-wrap gap-1">
                  {recommendation.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-warm-100 text-warm-900 text-xs rounded-full transition-base hover:bg-warm-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-warm-900">${recommendation.price}</span>
                  <span className="text-sm text-warm-700">{recommendation.likes} likes</span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-warm-400 hover:text-warm-600 transition-base hover-scale">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="btn-primary flex items-center space-x-2 hover-scale">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Try On</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderChatTab = () => (
    <div className="space-y-6">
      {/* Style Preferences */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-warm-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Style Preferences</h3>
        <div className="flex flex-wrap gap-3 pb-2">
          {styleOptions.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedStyle(style.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-base border
                ${selectedStyle === style.id
                  ? 'bg-warm-100 border-warm-300 text-warm-700 shadow-warm-md scale-105'
                  : 'bg-white border-warm-200 text-warm-500 hover:bg-warm-50 hover:text-warm-700'}
              `}
            >
              <style.icon className={`w-5 h-5 ${selectedStyle === style.id ? 'text-warm-400' : 'text-warm-300'}`} />
              <span className="font-medium">{style.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Chat Interface */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Your AI Stylist</h3>
            <p className="text-gray-600 mb-4">
              Describe your occasion, mood, or style preferences and get personalized recommendations
            </p>

            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'I need an outfit for a summer wedding with a bohemian vibe' or 'Help me style my new floral dress for a date night'"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                rows={3}
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" />
                      <span>Generate Outfit</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderGeneratedTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Generated Outfits</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span>AI Confidence Score</span>
        </div>
      </div>

      {/* Chatbot Interface */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Chat with AI Stylist</h4>
        <div className="flex flex-col space-y-4 max-h-72 overflow-y-auto mb-4">
          {chatMessages.length === 0 && (
            <div className="text-gray-400 text-sm">Start the conversation by describing your style, occasion, or what you want to see!</div>
          )}
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}> 
              <div className={`rounded-lg px-4 py-2 max-w-xs ${msg.role === 'user' ? 'bg-purple-100 text-purple-900' : 'bg-gray-100 text-gray-700'}`}>{msg.content}</div>
            </div>
          ))}
          {isChatLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg px-4 py-2 bg-gray-100 text-gray-500 animate-pulse">AI is thinking...</div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handleSendChat() }}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Type your prompt (e.g. 'Show me a vintage party look')"
            disabled={isChatLoading}
          />
          <button
            onClick={handleSendChat}
            disabled={isChatLoading || !chatInput.trim()}
            className="btn-primary px-4 py-2 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>

      {/* Visualization Placeholder */}
      <div className="bg-gray-50 rounded-xl p-6 border border-dashed border-gray-300 text-center">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Sparkles className="w-8 h-8 text-purple-400 mb-2" />
          <span className="text-gray-700 font-medium">Outfit visualizations will appear here after you chat with the AI!</span>
          <span className="text-xs text-gray-400">(Integrate your model to generate images or outfit cards)</span>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'browse':
        return renderBrowseTab()
      case 'chat':
        return renderChatTab()
      case 'generate':
        return renderGeneratedTab()
      default:
        return renderBrowseTab()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">AI Style Assistant</h2>
          <p className="text-gray-600 mt-2">Style smarter. Shop easier. Powered by AI.</p>
        </div>
        <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-lg">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span className="text-purple-700 font-medium">AI Powered</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-200">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${activeTab === tab.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {renderContent()}

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-primary-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Style Analysis</h3>
            <p className="text-gray-700 mb-3">
              Based on your {user.style} preferences and ${user.budget} budget, I've curated these looks that
              perfectly match your aesthetic. Your style confidence has increased by 15% this month!
            </p>
            <button className="btn-primary">
              Get More Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 