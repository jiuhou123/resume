'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function DocsPage() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/README.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading README:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 bg-white shadow-lg rounded-lg">
        <div className="prose prose-blue max-w-none p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
} 