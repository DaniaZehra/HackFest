'use client'

import React, { useState } from 'react'
import { Sparkles, Shirt, Users, Camera, DollarSign} from 'lucide-react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import AIRecommendations from './components/AIRecommendations'
import VirtualWardrobe from './components/VirtualWardrobe'
import DressSwap from './components/DressSwap'
import BudgetTracker from './components/BudgetTracker'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('recommendations')
  const [user] = useState({
    name: 'Sarah John',
    avatar: 'profile-icon.jpeg', 
    style: 'Bohemian Chic',
    budget: 500
  });
  const tabs = [
    { id: 'recommendations', label: 'AI Style Assistant', icon: Sparkles },
    { id: 'wardrobe', label: 'Virtual Wardrobe', icon: Shirt },
    { id: 'swap', label: 'Dress Swap', icon: Users },
    { id: 'budget', label: 'Budget Tracker', icon: DollarSign },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'recommendations':
        return <AIRecommendations user={user} />
      case 'wardrobe':
        return <VirtualWardrobe />
      case 'swap':
        return <DressSwap />
      case 'budget':
        return <BudgetTracker />
      default:
        return <AIRecommendations user={user} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      
      <div className="lg:pl-64">
        <Header user={user} />
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
} 