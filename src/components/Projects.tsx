import React from 'react';

const projects = [
  {
    num: '01',
    name: 'DustBill',
    desc: 'Freelance invoicing & CRM SaaS with multi-currency support and automated workflows.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Supabase'],
    live: 'https://dustbill.com',
    repo: 'https://github.com/Anant-0705/DustBill'
  },
  {
    num: '02',
    name: 'PlayReel',
    desc: 'Vertical-Scroll Game Discovery Platform backed by microservices and WebAssembly.',
    tags: ['React', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Nginx'],
    repo: 'https://github.com/Anant-0705/PlayReel'
  },
  {
    num: '03',
    name: 'Karya',
    desc: 'Full-stack productivity platform with tasks, reminders, and calendar integrations.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    live: 'https://www.arogyaherb.store/',
    repo: 'https://github.com/Anant-0705/Karya'
  },
  {
    num: '04',
    name: 'TEA',
    desc: 'Autonomous Meeting Intelligence System using LLMs to extract action items.',
    tags: ['Next.js', 'TypeScript', 'LLM'],
    repo: 'https://github.com/Anant-0705/Tea'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 py-20 md:px-12 md:py-32">
      <p className="section-label reveal font-mono text-[0.68rem] tracking-[0.25em] text-accent uppercase mb-4">
        Selected Work
      </p>
      <h2 className="section-title reveal font-display text-[clamp(48px,7vw,96px)] leading-[0.95] tracking-[-0.02em] mb-20">
        PROJECTS
      </h2>

      <div className="grid gap-[2px]">
        {projects.map((proj) => (
          <div key={proj.num} className="project-row reveal group">
            <span className="proj-num font-mono text-[0.7rem] text-subtle tracking-[0.1em] transition-colors duration-300 group-hover:text-accent">
              {proj.num}
            </span>
            <div className="proj-info">
              <div className="proj-name font-display text-[clamp(28px,4vw,52px)] tracking-[0.02em] leading-none mb-2">
                {proj.name}
              </div>
              <p className="text-white/50 text-[0.85rem] mb-4 max-w-xl font-light">
                {proj.desc}
              </p>
              <div className="flex gap-2 flex-wrap mb-4 md:mb-0">
                {proj.tags.map(tag => (
                  <span key={tag} className="font-mono text-[0.6rem] tracking-[0.12em] uppercase px-[0.6rem] py-1 border border-white/15 rounded-[3px] text-white/45">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 z-10 hidden md:flex">
              {proj.repo && (
                <a href={proj.repo} target="_blank" rel="noreferrer" className="font-mono text-[0.68rem] text-subtle tracking-[0.1em] transition-colors hover:text-white uppercase unstyled-link">
                  Repo
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[0.68rem] text-accent tracking-[0.1em] transition-colors hover:text-white uppercase unstyled-link">
                  Live <span className="text-[1.1rem]">↗</span>
                </a>
              )}
            </div>
            {/* Mobile links */}
            <div className="flex items-center gap-4 z-10 md:hidden col-span-2 col-start-2 mt-2">
              {proj.repo && (
                <a href={proj.repo} target="_blank" rel="noreferrer" className="font-mono text-[0.68rem] text-subtle tracking-[0.1em] transition-colors hover:text-white uppercase unstyled-link">
                  Repo
                </a>
              )}
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-[0.68rem] text-accent tracking-[0.1em] transition-colors hover:text-white uppercase unstyled-link">
                  Live <span>↗</span>
                </a>
              )}
            </div>
            {/* The hover background rect */}
            <div className="absolute inset-0 bg-[rgba(200,255,0,0.03)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
          </div>
        ))}
      </div>

      <style>{`
        .project-row {
          display: grid;
          grid-template-columns: 50px 1fr;
          align-items: center;
          gap: 1rem;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(242, 240, 235, 0.08);
          position: relative;
          color: inherit;
        }
        @media (min-width: 768px) {
          .project-row {
            grid-template-columns: 80px 1fr auto;
            gap: 2rem;
          }
        }
        .unstyled-link {
          text-decoration: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
