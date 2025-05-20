'use client';

import React from 'react';

interface EducationItem {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface EducationProps {
  items: EducationItem[];
}

export default function Education({ items }: EducationProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">教育经历</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-gray-200 hover:border-blue-500 transition-colors duration-200">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.school}</h3>
                <p className="text-blue-600 font-medium">{item.degree} · {item.field}</p>
              </div>
              <div className="text-gray-500 text-sm whitespace-nowrap">
                {item.startDate} - {item.endDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 