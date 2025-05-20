'use client';

import React from 'react';

interface AboutProps {
  advantages: string[];
}

export default function About({ advantages = [] }: AboutProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200">个人优势</h2>
      <div className="text-sm text-gray-800 leading-relaxed space-y-1">
        {advantages.map((adv, idx) => (
          <div key={idx}>• {adv}</div>
        ))}
      </div>
    </section>
  );
} 