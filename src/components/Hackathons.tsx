import React from 'react';

const highlights = [
  {
    title: 'Organizer - PortXFolio Hackathon',
    detail: 'Scaled event to 1,000+ participants · $5k+ prizes',
  },
  {
    title: 'Winner - Mega Hackathon',
    detail: 'Business Innovation Award · Built Bidzy (real-time logistics bidding)',
  },
  {
    title: 'Winner - HackOClock',
    detail: 'Best Beginners Award',
  },
  {
    title: 'Winner - MindTheGapChallenge',
    detail: 'Built the winning AI tool',
  },
  {
    title: 'Top 7 - Sphinx',
    detail: 'Top 7 at MNIT Jaipur - AI meeting automation platform for real-time transcription, analysis, and LLM-driven task execution.',
  },
];

const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="px-6 py-20 md:px-12 md:py-32 border-t border-white/[0.08]">
      <p className="reveal font-mono text-[0.68rem] tracking-[0.25em] text-accent uppercase mb-4">Hackathons & Leadership</p>
      <h2 className="reveal font-display text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.02em] mb-12">HACKATHONS<br />& LEADERSHIP</h2>

      <div className="reveal flex flex-wrap gap-8 md:gap-12 mb-10">
        <div>
          <div className="font-display text-[3.5rem] leading-none text-accent">3+</div>
          <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-subtle mt-1">Hackathons Won</div>
        </div>
        <div>
          <div className="font-display text-[3.5rem] leading-none text-accent">20+</div>
          <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-subtle mt-1">Projects Built</div>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-3xl">
        {highlights.map((item) => (
          <div key={item.title} className="reveal border border-white/[0.08] rounded-md p-4 md:p-5 bg-white/[0.01]">
            <p className="font-mono text-[0.72rem] tracking-[0.08em] uppercase text-white/85 mb-2">{item.title}</p>
            <p className="text-[0.92rem] leading-[1.7] text-white/65 font-light">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
