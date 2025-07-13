'use client'

import React from 'react'
import { Bell, Settings, Search } from 'lucide-react'

interface User {
  name: string
  avatar: string
  style: string
  budget: number
}

interface HeaderProps {
  user: User
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="warm-gradient-bg shadow-md border-b border-warm-100 transition-base">
      <div className="flex items-center justify-between px-6 py-6">
        {/* Welcome Message */}
        <div>
          <h1 className="text-2xl font-bold text-gradient">Welcome back, {user.name}!</h1>
          <p className="text-warm-700">Ready to discover your next perfect outfit?</p>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-400 w-5 h-5 transition-base" />
            <input
              type="text"
              placeholder="Search for outfits..."
              className="w-full pl-10 pr-4 py-2 border border-warm-200 rounded-lg focus:ring-2 focus:ring-warm-400 focus:border-transparent transition-base shadow-sm hover:shadow-md"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-warm-400 hover:text-warm-600 transition-base hover-scale">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 text-warm-400 hover:text-warm-600 transition-base hover-scale">
            <Settings className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-warm-900">{user.name}</p>
              <p className="text-xs text-warm-600">Budget: ${user.budget}</p>
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full border-2 border-warm-300 shadow-md transition-base hover:scale-110 hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </header>
  )
} 