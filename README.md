# FashionAI - Your Personal Style Assistant

A comprehensive Next.js fashion recommender system that combines AI-powered styling, virtual wardrobe management, community clothing swaps, and budget-conscious shopping recommendations.

## Features

### AI-Powered Recommendations
- Personalized outfit suggestions based on style preferences
- Occasion-based styling recommendations
- AI confidence scoring for outfit matches
- Visual outfit previews and try-on simulations

### Virtual Wardrobe
- Upload and organize clothing items
- AI-powered categorization and tagging
- Track wear frequency and styling history
- Digital inventory management

### Dress Swap Community
- Connect with fashion lovers in your area
- Swap clothes with verified community members
- User ratings and reviews system
- Location-based matching

### Budget Tracker
- Monitor fashion spending by category
- Thrift store recommendations and savings tracking
- Budget alerts and spending insights
- Cost-effective shopping suggestions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fashion-recommender
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **File Upload**: React Dropzone
- **Notifications**: React Hot Toast

## Project Structure

```
fashion-recommender/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   ├── Header.tsx           # Top header with user info
│   │   ├── RecommendationCard.tsx # AI recommendations
│   │   ├── VirtualWardrobe.tsx  # Wardrobe management
│   │   ├── DressSwap.tsx        # Community swaps
│   │   ├── AIStylist.tsx        # AI styling assistant
│   │   └── BudgetTracker.tsx    # Budget management
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main dashboard
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Design System

### Colors
- **Primary**: Pink gradient (#ec4899 to #db2777)
- **Fashion**: Custom fashion palette (pink, purple, gold, silver)
- **Neutral**: Gray scale for UI elements

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Primary and secondary variants
- **Animations**: Smooth transitions and micro-interactions
- **Typography**: Inter font family

## 🔮 Future Enhancements

- [ ] AI-powered virtual try-on
- [ ] Integration with e-commerce platforms
- [ ] Social media sharing features
- [ ] Advanced analytics and insights
- [ ] Mobile app development
- [ ] AR/VR fashion experiences