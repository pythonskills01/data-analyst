import React from 'react';
import { ArrowRight, Sparkles, Linkedin, Twitter, Github, Instagram, AtSign } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat-widget'));
  };

  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Profile Photo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="https://raw.githubusercontent.com/pythonskills01/data-analyst/main/40197959.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300";
              }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
             <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Data Analyst
          <span className="block text-indigo-600 mt-2 text-2xl md:text-4xl">Translating Data into Impact</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Hi, I'm a passionate analyst specializing in Python, SQL, and Visualization. 
          I build automated pipelines and interactive dashboards to help businesses make smarter decisions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={openChat}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center gap-2 group"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            Chat with AI
          </button>
          
          <a 
            href="#projects" 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://www.linkedin.com/in/engrmehmood/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 hover:scale-110 transition-all" aria-label="LinkedIn"><Linkedin size={24} /></a>
          <a href="https://x.com/pythonskills01" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:scale-110 transition-all" aria-label="X (Twitter)"><Twitter size={24} /></a>
          <a href="https://www.threads.com/@data_analyst_2k25" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:scale-110 transition-all" aria-label="Threads"><AtSign size={24} /></a>
          <a href="https://www.instagram.com/data_analyst_2k25" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 hover:scale-110 transition-all" aria-label="Instagram"><Instagram size={24} /></a>
          <a href="https://github.com/engrmehmood01" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 hover:scale-110 transition-all" aria-label="Github"><Github size={24} /></a>
        </div>

      </div>
    </section>
  );
};