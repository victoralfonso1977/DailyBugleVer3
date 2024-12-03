// Import necessary dependencies from React and our icon library
import React, { useState, useEffect } from 'react';
import { Newspaper, Home, Mail, MessageCircle, Camera } from 'lucide-react';

// Define our navigation items in a separate array for better organization
// Each item has a name and an associated icon component
const navItems = [
  { name: 'HOME', icon: Home },
  { name: 'NEWS', icon: Newspaper },
  { name: 'SPIDER-MAN SIGHTINGS', icon: Camera },
  { name: 'OPINION', icon: MessageCircle },
  { name: 'CONTACT', icon: Mail }
];

// The NewsCard component displays individual news articles
// It accepts title, excerpt, and imageUrl as props
const NewsCard = ({ title, excerpt, imageUrl }) => {
  return (
    <div className="overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg bg-white rounded-lg">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="p-4">
        <p className="text-gray-600">{excerpt}</p>
      </div>
    </div>
  );
};

// The BreakingNews component creates an animated news ticker
// It uses React hooks to manage the animation state
const BreakingNews = () => {
  const [position, setPosition] = useState(100);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => prev <= -100 ? 100 : prev - 0.5);
    }, 50);
    // Cleanup function to prevent memory leaks
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div 
        className="whitespace-nowrap font-bold"
        style={{ transform: `translateX(${position}%)` }}
      >
        BREAKING NEWS: Spider-Man Spotted Swinging Through Downtown! More Details Inside...
      </div>
    </div>
  );
};

// The Navigation component creates our menu bar
// It maps over the navItems array to create each menu item
const Navigation = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
        {navItems.map(({ name, icon: Icon }) => (
          
            key={name}
            href={`#${name.toLowerCase()}`}
            className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
          >
            <Icon size={20} />
            <span className="font-bold">{name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

// The NewsSection component displays our grid of news articles
// It contains sample news data and renders NewsCard components
const NewsSection = () => {
  const newsItems = [
    {
      title: "Masked Vigilante: Hero or Menace?",
      excerpt: "Spider-Man was spotted again last night preventing what appeared to be a high-tech robbery. But questions remain about his true motives...",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      title: "City Under Siege: The Spider-Man Effect",
      excerpt: "As sightings of the wall-crawler increase, we investigate the impact on local business and tourism...",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      title: "Exclusive: Spider-Man's Latest Escapade",
      excerpt: "Our photographers captured these exclusive shots of the web-slinger in action. What was he up to? Full story inside...",
      imageUrl: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {newsItems.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

// The main DailyBugle component that brings everything together
// It renders the header, navigation, breaking news, and news section
const DailyBugle = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-center uppercase tracking-wider shadow-text">
          THE DAILY BUGLE
        </h1>
      </header>

      <Navigation />
      <BreakingNews />

      <main className="max-w-6xl mx-auto py-8">
        <NewsSection />
      </main>
    </div>
  );
};

// Export the DailyBugle component as the default export
export default DailyBugle;
