'use client';

import React from 'react';

interface ProjectItem {
  name: string;
  description: string;
  technologies: string;
  startDate: string;
  endDate: string;
}

interface ProjectsProps {
  items: ProjectItem[];
}

export default function Projects({ items }: ProjectsProps) {
  console.log('Projects items:', items);
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">项目经验</h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-gray-200 hover:border-blue-500 transition-colors duration-200 page-section">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <div className="text-gray-500 text-sm whitespace-nowrap">
                {item.startDate} - {item.endDate}
              </div>
            </div>
            <div className="text-gray-600 leading-relaxed whitespace-pre-line mb-4">
              {item.description}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.technologies.split(/,|、/).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 