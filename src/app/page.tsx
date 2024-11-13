"use client";

import { useState, useEffect } from 'react';
import { NewsResponse } from '@/types/news';
import Header from '@/components/Header';
import { NewsCard } from '@/components/NewsCard';

const categoryMapping: { [key: string]: string } = {
  'Home': 'general',
  'Business': 'business',
  'Technology': 'technology',
  'Entertainment': 'entertainment',
  'Sports': 'sports',
  'Science': 'science',
  'Health': 'health',
};

async function getNews(category: string): Promise<NewsResponse> {
  const apiCategory = categoryMapping[category] || '';
  const url = `https://newsapi.org/v2/top-headlines?country=us${apiCategory ? `&category=${apiCategory}` : ''}&apiKey=277e36e82ba6411a83964a61e1f39e28`;

  const res = await fetch(url, { next: { revalidate: 300 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch news, status code: ${res.status}`);
  }

  return await res.json();
}

// Rest of your component remains the same
export default function Home() {
  const [news, setNews] = useState<NewsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const fetchNews = async (category: string) => {
    try {
      const response = await getNews(category);
      setNews(response);
      setError(null);
    } catch (err) {
      setError('Failed to fetch news');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNews(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header onCategorySelect={setSelectedCategory} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Latest News</h1>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news?.articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
