import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiNextdotjs, SiMongodb, SiGraphql, SiRedis, SiSupabase, SiPrisma } from 'react-icons/si';
import { DiNginx } from 'react-icons/di';

const technologies = [
  { name: 'React', icon: FaReact, accent: false },
  { name: '★', accent: true },
  { name: 'Next.js', icon: SiNextdotjs, accent: false },
  { name: '★', accent: true },
  { name: 'Node.js', icon: FaNodeJs, accent: false },
  { name: '★', accent: true },
  { name: 'TypeScript', icon: SiTypescript, accent: false },
  { name: '★', accent: true },
  { name: 'PostgreSQL', icon: SiPostgresql, accent: false },
  { name: '★', accent: true },
  { name: 'MongoDB', icon: SiMongodb, accent: false },
  { name: '★', accent: true },
  { name: 'Supabase', icon: SiSupabase, accent: false },
  { name: '★', accent: true },
  { name: 'Redis', icon: SiRedis, accent: false },
  { name: '★', accent: true },
  { name: 'AWS', icon: FaAws, accent: false },
  { name: '★', accent: true },
  { name: 'Docker', icon: FaDocker, accent: false },
  { name: '★', accent: true },
  { name: 'Nginx', icon: DiNginx, accent: false },
  { name: '★', accent: true },
  { name: 'GraphQL', icon: SiGraphql, accent: false },
  { name: '★', accent: true },
  { name: 'Prisma', icon: SiPrisma, accent: false },
  { name: '★', accent: true },
];

const items = [...technologies, ...technologies]; // Duplicate for seamless loop

const Marquee: React.FC = () => {
  return (
    <section id="activity" className="border-y border-white/[0.08] py-4 overflow-hidden bg-mid">
      <div className="flex gap-12 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {items.map((item, i) => (
          <span 
            key={i} 
            className={`font-display text-base tracking-[0.2em] shrink-0 flex items-center gap-3 ${item.accent ? 'text-accent' : 'text-white/40'}`}
          >
            {item.icon && <item.icon className="w-[1.125rem] h-[1.125rem]" />}
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
