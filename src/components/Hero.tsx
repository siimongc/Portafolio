import React from 'react';

interface HeroProps {
  name: string;
  summary: string;
}

export const Hero: React.FC<HeroProps> = ({ name, summary }) => {
  return (
    <section className="relative py-24 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background solarpunk glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-solar-leaf/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-solar-light mb-6 tracking-tight">
        <span className="text-solar-accent font-light">{'<'}</span>
        {name}
        <span className="text-solar-accent font-light">{'>'}</span>
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-solar-light/80 leading-relaxed font-sans">
        {summary}
      </p>
      
      <div className="mt-12 w-px h-24 bg-gradient-to-b from-solar-accent/50 to-transparent"></div>
    </section>
  );
};
