// src\components\NewsCard.tsx
'use client';

import { NewsArticle } from '@/types/news';

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-gray-800">
      {article.urlToImage && (
        <div className="w-full h-48 relative">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-48 object-cover rounded-t-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{article.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
          >
            Read more
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </article>
  );
}
