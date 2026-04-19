import React, { useEffect, useMemo, useState } from 'react';

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
};

const GITHUB_USERNAME = 'Anant-0705';

const monthShort = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });

const levelClass = (level: number) => {
  if (level <= 0) return 'bg-[#161b22]';
  if (level === 1) return 'bg-[#0e4429]';
  if (level === 2) return 'bg-[#006d32]';
  if (level === 3) return 'bg-[#26a641]';
  return 'bg-[#39d353]';
};

const toIsoDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

const buildWeeks = (days: ContributionDay[]) => {
  if (days.length === 0) return [] as ContributionDay[][];

  const dayMap = new Map(days.map((d) => [d.date, d]));
  const start = new Date(days[0].date);
  const end = new Date(days[days.length - 1].date);

  const gridStart = new Date(start);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());

  const gridEnd = new Date(end);
  gridEnd.setDate(gridEnd.getDate() + (6 - gridEnd.getDay()));

  const allDays: ContributionDay[] = [];
  const cursor = new Date(gridStart);

  while (cursor <= gridEnd) {
    const iso = toIsoDate(cursor);
    allDays.push(dayMap.get(iso) ?? { date: iso, count: 0, level: 0 });
    cursor.setDate(cursor.getDate() + 1);
  }

  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }

  return weeks;
};

const Activity: React.FC = () => {
  const [contributionData, setContributionData] = useState<ContributionResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }

        const data: ContributionResponse = await response.json();
        setContributionData(data);
      } catch (err) {
        if (!(err instanceof DOMException && err.name === 'AbortError')) {
          setError('Unable to load contribution heatmap right now.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadContributions();

    return () => controller.abort();
  }, []);

  const weeks = useMemo(() => {
    return contributionData ? buildWeeks(contributionData.contributions) : [];
  }, [contributionData]);

  return (
    <section id="activity" className="px-6 py-20 md:px-12 md:py-32 border-t border-white/[0.08]">
      <div className="max-w-[1180px] mx-auto">
        <p className="reveal font-mono text-[0.68rem] tracking-[0.25em] text-accent uppercase mb-4">GitHub Activity</p>
        <h2 className="reveal font-display text-[clamp(42px,6vw,84px)] leading-[0.95] tracking-[-0.02em] mb-10">GITHUB ACTIVITY</h2>

        <div className="reveal relative overflow-hidden p-5 md:p-8 border border-white/[0.08] rounded-2xl bg-[radial-gradient(circle_at_15%_0%,rgba(57,211,83,0.08),transparent_35%),radial-gradient(circle_at_100%_100%,rgba(57,211,83,0.05),transparent_30%),#06080b] shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_25%)]"></div>
          {loading && (
            <p className="text-[0.9rem] text-white/55 font-light">Fetching contribution graph...</p>
          )}

          {!loading && error && <p className="text-[0.9rem] text-white/55 font-light">{error}</p>}

          {!loading && !error && contributionData && (
            <>
              <div className="overflow-x-auto pb-3">
                <div className="min-w-[820px] w-fit">
                  <div className="flex pl-10 mb-2 gap-[3px]">
                    {weeks.map((week, index) => {
                      const current = monthShort(new Date(week[0].date));
                      const previous = index > 0 ? monthShort(new Date(weeks[index - 1][0].date)) : '';
                      const showLabel = index === 0 || current !== previous;

                      return (
                        <div key={`month-${week[0].date}`} className="w-[12px] text-[0.64rem] leading-none text-white/35 relative">
                          {showLabel ? (
                            <span className="absolute top-0 left-0 translate-y-[-2px]">{current}</span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-2">
                    <div className="grid grid-rows-7 gap-[3px] text-[0.64rem] text-white/35 pt-[1px]">
                      <span className="h-[12px]"></span>
                      <span className="h-[12px] leading-[12px]">Mon</span>
                      <span className="h-[12px]"></span>
                      <span className="h-[12px] leading-[12px]">Wed</span>
                      <span className="h-[12px]"></span>
                      <span className="h-[12px] leading-[12px]">Fri</span>
                      <span className="h-[12px]"></span>
                    </div>

                    <div className="flex gap-[3px]">
                      {weeks.map((week) => (
                        <div key={week[0].date} className="grid grid-rows-7 gap-[3px]">
                          {week.map((day) => (
                            <div
                              key={day.date}
                              className={`w-[12px] h-[12px] rounded-[2px] border border-[#2b3137] ${levelClass(day.level)} transition-transform duration-150 hover:scale-110 hover:border-[#7ee787]`}
                              title={`${day.count} contributions on ${day.date}`}
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-5 flex-wrap">
                <p className="text-[0.92rem] text-white/60">
                  <span className="text-white/85 font-medium">{contributionData.total.lastYear.toLocaleString('en-IN')}</span> contributions in the last year
                </p>

                <div className="flex items-center gap-2 text-[0.74rem] text-white/45">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <span
                      key={level}
                      className={`w-[12px] h-[12px] rounded-[2px] border border-[#2b3137] ${levelClass(level)}`}
                    ></span>
                  ))}
                  <span>More</span>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-accent no-underline transition-colors hover:text-white"
                >
                  github.com/{GITHUB_USERNAME} <span className="text-[1rem]">↗</span>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Activity;
