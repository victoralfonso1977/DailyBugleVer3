import React, { useState, useEffect } from 'react';
import { Newspaper, Home, Mail, MessageCircle, Camera } from 'lucide-react';

// Navigation items with their icons
const navItems = [
  { name: 'HOME', icon: Home },
  { name: 'NEWS', icon: Newspaper },
  { name: 'SPIDER-MAN SIGHTINGS', icon: Camera },
  { name: 'OPINION', icon: MessageCircle },
  { name: 'CONTACT', icon: Mail }
];

// A sleek card component for news articles
const NewsCard = ({ title, excerpt, imageUrl }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
    <div className="relative">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-1 m-4 rounded-full text-sm font-bold">
        BREAKING
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight hover:text-red-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{excerpt}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">2 hours ago</span>
        <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  </div>
);

// An eye-catching animated news ticker
const BreakingNews = () => {
  const [position, setPosition] = useState(100);

  useEffect(() => {
    const animation = setInterval(() => {
      setPosition(prev => prev <= -100 ? 100 : prev - 0.5);
    }, 50);
    return () => clearInterval(animation);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-3 relative overflow-hidden shadow-md">
      <div 
        className="whitespace-nowrap font-bold text-lg tracking-wide"
        style={{ transform: `translateX(${position}%)` }}
      >
        🚨 BREAKING NEWS: Spider-Man Thwarts Major Heist at Manhattan Bank! Witnesses Report Spectacular Mid-Air Battle...
      </div>
    </div>
  );
};

// Modern navigation bar with smooth hover effects
const Navigation = () => (
  <nav className="bg-gray-900 py-4 shadow-lg">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
      {navItems.map(({ name, icon: Icon }) => (
        <a 
          key={name}
          href={`#${name.toLowerCase()}`}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 group"
        >
          <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-medium tracking-wide">{name}</span>
        </a>
      ))}
    </div>
  </nav>
);

// Grid layout for news articles
const NewsSection = () => {
  const newsItems = [
    {
      title: "MASKED MENACE: Spider-Man's Latest City-Wide Escapade",
      excerpt: "Witnesses report dazzling display of acrobatics as the wall-crawler confronts tech-wielding criminals. But at what cost to public safety?",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      title: "EXCLUSIVE: The Trail of the Web-Slinger",
      excerpt: "Our investigative team pieces together Spider-Man's recent activities across the city. What pattern emerges from the chaos?",
      imageUrl: "/api/placeholder/400/320"
    },
    {
      title: "Spider-Man: Threat or Protector?",
      excerpt: "As incidents of superhuman activity rise, citizens and officials debate the role of masked vigilantes in our changing city.",
      imageUrl: "/api/placeholder/400/320"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {newsItems.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

// Main component with improved header design
const DailyBugle = () => (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-8 px-4 shadow-xl">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-2 text-shadow-lg">
          THE DAILY BUGLE
        </h1>
        <p className="text-xl text-red-100 font-medium tracking-wide">
          NEW YORK'S PREMIER SOURCE FOR SPIDER-MAN NEWS
        </p>
      </div>
    </header>
    <Navigation />
    <BreakingNews />
    <main className="max-w-7xl mx-auto py-12">
      <NewsSection />
    </main>
  </div>
);

export default DailyBugle;
