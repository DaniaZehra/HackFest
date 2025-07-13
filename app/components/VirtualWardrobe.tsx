'use client'

import React, { useState } from 'react'
import { Upload, Plus, Filter, Tag, Trash2, Edit } from 'lucide-react'

export default function VirtualWardrobe() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [uploadedItems, setUploadedItems] = useState([
    {
      id: 1,
      name: 'Floral Summer Dress',
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop',
      color: 'Blue',
      season: 'Summer',
      occasion: 'Casual',
      lastWorn: '2 days ago'
    },
    {
      id: 2,
      name: 'Denim Jacket',
      category: 'outerwear',
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=400&fit=crop',
      color: 'Blue',
      season: 'All',
      occasion: 'Casual',
      lastWorn: '1 week ago'
    },
    {
      id: 3,
      name: 'Black Ankle Boots',
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
      color: 'Black',
      season: 'Fall',
      occasion: 'Casual',
      lastWorn: '3 days ago'
    },
    {
      id: 4,
      name: 'White Blouse',
      category: 'tops',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop',
      color: 'White',
      season: 'All',
      occasion: 'Work',
      lastWorn: '5 days ago'
    }
  ])

  const categories = [
    { id: 'all', label: 'All Items', count: uploadedItems.length },
    { id: 'dresses', label: 'Dresses', count: uploadedItems.filter(item => item.category === 'dresses').length },
    { id: 'tops', label: 'Tops', count: uploadedItems.filter(item => item.category === 'tops').length },
    { id: 'outerwear', label: 'Outerwear', count: uploadedItems.filter(item => item.category === 'outerwear').length },
    { id: 'shoes', label: 'Shoes', count: uploadedItems.filter(item => item.category === 'shoes').length },
  ]

  const filteredItems = uploadedItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Virtual Wardrobe</h2>
          <p className="text-gray-600 mt-2">Manage and organize your clothing collection</p>
        </div>
        <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
          <Plus className="w-5 h-5" />
          <span>Add Item</span>
        </button>
      </div>

      {/* Upload Area */}
      <div className="p-8 border-dashed rounded-2xl bg-[white] shadow-md">
        <div className="text-center">
          <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Upload Your Clothes</h3>
          <p className="text-blue-700 mb-4">
            Take photos of your clothing items to build your virtual wardrobe
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-semibold shadow-md transition-all duration-300">
            Upload Photos
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow-md p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{uploadedItems.length}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <Tag className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Filter className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Recently Worn</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Tag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 hover-scale">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Outfit Ideas</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Tag className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="card-warm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="flex flex-wrap gap-3 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-base border
                ${selectedCategory === category.id
                  ? 'bg-warm-100 border-warm-300 text-warm-700 shadow-warm-md scale-105'
                  : 'bg-white border-blue-100 text-blue-500 hover:bg-blue-50 hover:text-blue-700'}
              `}
            >
              <span className="font-medium">{category.label}</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Wardrobe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="card-warm overflow-hidden hover:shadow-lg hover-scale transition-base"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-1">
                <button className="p-1 bg-white/80 rounded-full hover:bg-warm-100 transition-base hover-scale">
                  <Edit className="w-4 h-4 text-warm-500" />
                </button>
                <button className="p-1 bg-white/80 rounded-full hover:bg-warm-100 transition-base hover-scale">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-warm-900 mb-2">{item.name}</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Color:</span>
                  <span className="text-gray-900">{item.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Season:</span>
                  <span className="text-gray-900">{item.season}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Occasion:</span>
                  <span className="text-gray-900">{item.occasion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Last Worn:</span>
                  <span className="text-gray-900">{item.lastWorn}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 