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
    <section id="about" className="px-6 py-20 pb-28 md:px-12 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start border-t border-white/[0.08]">
      <div>
        <p className="reveal font-mono text-[0.68rem] tracking-[0.25em] text-accent uppercase mb-4">Who I Am</p>
        <h2 className="reveal font-display text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.02em] mb-12">ABOUT<br />ME</h2>
        <p className="reveal text-[1.1rem] leading-[1.8] text-white/70 font-light mb-8">
          Hey — I'm <strong className="text-white font-medium">Anant Singhal</strong>, a full stack developer & AI enthusiast pursuing my B.Tech in CSE (Artificial Intelligence) at KIET Group of Institutions.
          <br /><br />
          I specialize in building <strong className="text-white font-medium">scalable microservices, full-stack SaaS platforms, and event-driven architectures</strong>. From engineering WebAssembly loader pipelines for 60 FPS in-browser execution to automating CRM workflows with Supabase Edge Functions, I love solving complex technical problems.
        </p>
        
        <div className="reveal flex flex-wrap gap-8 md:gap-12 mb-12">
          <div>
            <div className="font-display text-[3.5rem] leading-none text-accent">3+</div>
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-subtle mt-1">Hackathons Won</div>
          </div>
          <div>
            <div className="font-display text-[3.5rem] leading-none text-accent">20+</div>
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-subtle mt-1">Projects Built</div>
          </div>
          <div>
            <div className="font-display text-[3.5rem] leading-none text-accent">8.04</div>
            <div className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-subtle mt-1">B.Tech CGPA</div>
          </div>
        </div>
      </div>
      
      <div>
        <p className="reveal font-mono text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-6">Tech Stack</p>
        <div className="flex flex-col gap-3">
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
      </div>
    </section>
  );
};

export default About;
