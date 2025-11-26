import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
            <p className="text-slate-600">Selected work demonstrating analysis and impact.</p>
          </div>
          <a href="#" className="text-slate-900 font-medium hover:text-slate-600 flex items-center gap-1 transition-colors">
            View Github <Github size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 items-center text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {project.description}
                </p>
                
                {project.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-200/60 w-full">
                    {project.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</div>
                        <div className="font-semibold text-slate-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-auto w-full">
                  <div className="flex gap-2">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="text-xs font-medium text-slate-500 bg-slate-200/50 px-2 py-1 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};