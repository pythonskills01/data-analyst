import React from 'react';
import { Mail, Linkedin, Twitter, MapPin, Instagram, Github, AtSign } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
            Whether you have a question about data strategy, need a custom dashboard, or just want to say hi, I'm always open to discussing new opportunities.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="mailto:pythonskills01@gmail.com" 
              className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-colors"
            >
              <Mail size={20} />
              pythonskills01@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
              <a href="https://www.linkedin.com/in/engrmehmood/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/pythonskills01" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
              <a href="https://www.threads.com/@data_analyst_2k25" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="Threads">
                <AtSign size={20} />
              </a>
              <a href="https://www.instagram.com/data_analyst_2k25" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/engrmehmood01" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-slate-300 hover:text-white" aria-label="Github">
                <Github size={20} />
              </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} />
            <span>Based in San Francisco, CA • Available Remote</span>
          </div>
        </div>
      </div>
      
      <footer className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} DATA ANALYST. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with React, Tailwind & Gemini API</p>
      </footer>
    </section>
  );
};