import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Tools } from './components/Tools';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-indigo-100 selection:text-indigo-900">
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] opacity-20"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Tools />
        <Services />
        <Projects />
        <Contact />
      </main>

      <ChatWidget />
    </div>
  );
}

export default App;
