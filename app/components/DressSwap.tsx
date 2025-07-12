'use client'

import React, { useState } from 'react'
import { Users, Heart, MessageCircle, Star, Search, MapPin } from 'lucide-react'

export default function DressSwap() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const availableSwaps = [
    {
      id: 1,
      user: {
        name: 'Emma Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
        rating: 4.8,
        location: 'New York, NY'
      },
      item: {
        name: 'Vintage Floral Dress',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop',
        size: 'M',
        condition: 'Excellent',
        brand: 'Free People',
        description: 'Beautiful vintage-inspired floral dress, perfect for summer events'
      },
      wants: ['Denim Jacket', 'Ankle Boots', 'Summer Dress'],
      distance: '2.3 miles',
      posted: '2 hours ago'
    },
    {
      id: 2,
      user: {
        name: 'Sophie Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
        rating: 4.9,
        location: 'Brooklyn, NY'
      },
      item: {
        name: 'Leather Jacket',
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop',
        size: 'S',
        condition: 'Good',
        brand: 'Zara',
        description: 'Classic black leather jacket, slightly worn but still stylish'
      },
      wants: ['Summer Dress', 'Blouse', 'Jeans'],
      distance: '1.8 miles',
      posted: '5 hours ago'
    },
    {
      id: 3,
      user: {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face',
        rating: 4.7,
        location: 'Queens, NY'
      },
      item: {
        name: 'Designer Handbag',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop',
        size: 'One Size',
        condition: 'Like New',
        brand: 'Coach',
        description: 'Elegant brown leather handbag, perfect for work or casual outings'
      },
      wants: ['Evening Dress', 'Heels', 'Accessories'],
      distance: '4.1 miles',
      posted: '1 day ago'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Items' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'outerwear', label: 'Outerwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'shoes', label: 'Shoes' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Dress Swap Community</h2>
          <p className="text-gray-600 mt-2">Swap clothes with fashion lovers in your area</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
          <Users className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Active Community</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Swaps</p>
              <p className="text-2xl font-bold text-gray-900">{availableSwaps.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Nearby Users</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Successful Swaps</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Your Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.9</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for items or users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-primary-100 text-primary-700 border border-primary-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Available Swaps */}
      <div className="space-y-6">
        {availableSwaps.map((swap, index) => (
          <div
            key={swap.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-6">
                {/* Item Image */}
                <div className="relative">
                  <img
                    src={swap.item.image}
                    alt={swap.item.name}
                    className="w-32 h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                    {swap.item.size}
                  </div>
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {swap.item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{swap.item.brand}</p>
                      <p className="text-gray-700">{swap.item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{swap.distance}</span>
                      <p className="text-xs text-gray-400">{swap.posted}</p>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={swap.user.avatar}
                      alt={swap.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{swap.user.name}</p>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{swap.user.rating}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{swap.user.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Wants */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Looking for:</p>
                    <div className="flex flex-wrap gap-2">
                      {swap.wants.map((want, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {want}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <button className="btn-primary flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>Start Swap</span>
                    </button>
                    <button className="btn-secondary flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 