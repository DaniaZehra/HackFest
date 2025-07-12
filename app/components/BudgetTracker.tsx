'use client'

import React, { useState } from 'react'

import { DollarSign, TrendingUp, ShoppingBag, Star, MapPin, Clock, Tag } from 'lucide-react'

export default function BudgetTracker() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  const budgetData = {
    total: 500,
    spent: 234,
    remaining: 266,
    monthlyAverage: 189
  }

  const recentPurchases = [
    {
      id: 1,
      item: 'Floral Summer Dress',
      price: 89,
      store: 'Thrift Store NYC',
      date: '2024-01-15',
      category: 'Dresses',
      rating: 4.8,
      savings: 45
    },
    {
      id: 2,
      item: 'Denim Jacket',
      price: 45,
      store: 'Dream Bazaar',
      date: '2024-01-12',
      category: 'Outerwear',
      rating: 4.6,
      savings: 30
    },
    {
      id: 3,
      item: 'Ankle Boots',
      price: 67,
      store: 'Spiffy Thrift Finds',
      date: '2024-01-10',
      category: 'Shoes',
      rating: 4.9,
      savings: 55
    }
  ]

  const thriftRecommendations = [
    {
      id: 1,
      name: 'Thrift Store NYC',
      distance: '0.8 miles',
      rating: 4.7,
      specialties: ['Vintage Dresses', 'Designer Items'],
      avgPrice: '$25-75',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Spiffy Thrift Finds',
      distance: '1.2 miles',
      rating: 4.5,
      specialties: ['Work Wear', 'Accessories'],
      avgPrice: '$15-50',
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Dream Bazaar',
      distance: '2.1 miles',
      rating: 4.8,
      specialties: ['Trendy Items', 'Streetwear'],
      avgPrice: '$20-80',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=200&fit=crop'
    }
  ]

  const spendingByCategory = [
    { category: 'Dresses', amount: 89, percentage: 38 },
    { category: 'Outerwear', amount: 45, percentage: 19 },
    { category: 'Shoes', amount: 67, percentage: 29 },
    { category: 'Accessories', amount: 33, percentage: 14 }
  ]

  const periods = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Budget Tracker</h2>
          <p className="text-gray-600 mt-2">Track your fashion spending and find the best thrift stores</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <span className="text-green-700 font-medium">Savings: $130</span>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Budget</p>
              <p className="text-2xl font-bold text-gray-900">${budgetData.total}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Spent</p>
              <p className="text-2xl font-bold text-red-600">${budgetData.spent}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Remaining</p>
              <p className="text-2xl font-bold text-green-600">${budgetData.remaining}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Avg</p>
              <p className="text-2xl font-bold text-gray-900">${budgetData.monthlyAverage}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Period Filter */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Time Period</h3>
        <div className="flex space-x-3">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedPeriod === period.id
                  ? 'bg-primary-100 text-primary-700 border border-primary-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spending by Category */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h3>
        <div className="space-y-4">
          {spendingByCategory.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                <span className="font-medium text-gray-900">{item.category}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">${item.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Purchases */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Purchases</h3>
        <div className="space-y-4">
          {recentPurchases.map((purchase) => (
            <div key={purchase.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Tag className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{purchase.item}</h4>
                  <p className="text-sm text-gray-500">{purchase.store}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">${purchase.price}</p>
                <p className="text-sm text-green-600">Saved ${purchase.savings}</p>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{purchase.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thrift Store Recommendations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Nearby Thrift Stores</h3>
          <button className="btn-primary">
            View All Stores
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thriftRecommendations.map((store, index) => (
            <div
              key={store.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Store Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                  {store.avgPrice}
                </div>
              </div>

              {/* Store Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{store.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{store.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{store.distance}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs font-medium text-gray-500 mb-2">SPECIALTIES:</p>
                  <div className="flex flex-wrap gap-1">
                    {store.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Visit Store
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Tips */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Shopping Tips</h3>
            <p className="text-gray-700 mb-3">
              You've saved $130 this month by shopping at thrift stores! Consider visiting 
              Thrift Store NYC this weekend - they're having a 20% off sale on vintage dresses. 
              Your budget is on track for your spring shopping goals.
            </p>
            <button className="btn-primary">
              Get More Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 