import React from 'react';
import { TOOLS } from '../constants';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Tools & Technologies</h2>
          <p className="text-slate-600 max-w-2xl">
            My stack for data cleaning, analysis, visualization, and automation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool) => (
            <div 
              key={tool.name}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors cursor-default"
            >
              <div className={`mb-3 ${tool.color}`}>
                <tool.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-slate-700">{tool.name}</span>
              <span className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};