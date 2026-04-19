import React from 'react';

const skills = [
  { name: 'HTML, CSS, JavaScript, TypeScript, Java (Core & Adv), SQL', category: 'Languages', level: 5 },
  { name: 'React, Next.js, Node.js, Express, Vite, Tailwind CSS, Nginx', category: 'Frameworks/Tools', level: 5 },
  { name: 'PostgreSQL, Redis, MongoDB, Supabase, Prisma, Elasticsearch', category: 'Cloud/Databases', level: 4 },
  { name: 'Microservices, REST APIs, WebAssembly, Event-Driven Messaging', category: 'Concepts', level: 4 },
  { name: 'AWS (EC2, S3, IAM), Docker, RabbitMQ, CI/CD, MinIO', category: 'DevOps/Infrastructure', level: 4 },
];

const About: React.FC = () => {
  return (
    <section id="skills" className="px-6 py-20 md:px-12 md:py-32 border-t border-white/[0.08]">
      <p className="reveal font-mono text-[0.68rem] tracking-[0.25em] text-accent uppercase mb-4">Skills</p>
      <h2 className="reveal font-display text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.02em] mb-12">TECH<br />STACK</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {skills.map((skill, i) => (
          <div key={i} className="reveal flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-white/[0.08] rounded-md transition-all duration-300 hover:border-[rgba(200,255,0,0.3)] hover:bg-[rgba(200,255,0,0.03)] gap-3 sm:gap-6">
            <div>
              <div className="font-mono text-[0.6rem] tracking-[0.15em] text-accent uppercase mb-1">{skill.category}</div>
              <div className="font-mono text-[0.75rem] tracking-[0.05em] leading-[1.4] text-white/80">{skill.name}</div>
            </div>
            <div className="flex gap-1 shrink-0">
              {[...Array(5)].map((_, j) => (
                <div key={j} className={`w-1.5 h-1.5 rounded-full ${j < skill.level ? 'bg-accent' : 'bg-white/15'}`}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
