'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'

interface Tab {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  tabs: Tab[]
}

export default function Sidebar({ activeTab, setActiveTab, tabs }: SidebarProps) {
  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-[#f5f6fa] border-r border-blue-100 shadow-md flex flex-col">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <div className="w-full px-4">
            <div className="rounded-2xl warm-gradient-bg shadow-warm-md flex items-center justify-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 warm-gradient-bg rounded-xl flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-warm-700">FashionAI</span>
              </div>
            </div>
          </div>
        </div>


        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-base hover-scale hover:shadow-lg ${isActive
                    ? 'bg-warm-100 text-warm-900 border border-warm-300 shadow-md'
                    : 'text-warm-700 hover:bg-warm-50 hover:text-warm-900'
                  }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-warm-500' : 'text-warm-300'}`} />
                <span className="font-medium">{tab.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
} 