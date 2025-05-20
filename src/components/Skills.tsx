'use client';

import React from 'react';

interface SkillItem {
  category: string;
  items: string[];
}

interface SkillsProps {
  items: SkillItem[];
}

export default function Skills({ items }: SkillsProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">技能特长</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.category}</h3>
            <div className="flex flex-wrap gap-2">
              {item.items.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 