'use client';

import React from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b border-gray-200">工作经历</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-base font-bold text-gray-800">{item.company}</span>
              <span className="text-xs text-gray-500">{item.startDate} - {item.endDate}</span>
            </div>
            <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 