import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How I can help</h2>
          <div className="h-1 w-20 bg-slate-200 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-6 text-slate-900 group-hover:scale-110 transition-transform">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};