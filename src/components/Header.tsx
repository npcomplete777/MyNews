// src\components\Header.tsx
'use client';

import { useState } from 'react';

const categories = [
  'Home', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'
];

export default function Header({ onCategorySelect }: { onCategorySelect: (category: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Update selected category in Home
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">News Platform</h1>
      </div>
      <nav className="container mx-auto px-4 py-2">
        <ul className="flex space-x-4 overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`text-gray-700 dark:text-gray-300 px-4 py-2 font-medium rounded-md 
                            ${selectedCategory === category ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
