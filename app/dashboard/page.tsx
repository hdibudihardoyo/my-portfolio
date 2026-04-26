"use client";

import { useTranslations } from "next-intl";
import { Globe2, Activity } from "lucide-react";
import StackIcon from "tech-stack-icons";
import { useEffect, useState } from "react";



export default function DashboardPage() {
  const t = useTranslations("Dashboard");
  const [mounted, setMounted] = useState(false);
  const [githubData, setGithubData] = useState<any>(null);
  const [contributions, setContributions] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    fetch("https://api.github.com/users/hdibudihardoyo")
      .then(res => res.json())
      .then(data => setGithubData(data));

    fetch("https://github-contributions-api.deno.dev/hdibudihardoyo.json")
      .then(res => res.json())
      .then(data => setContributions(data));
  }, []);

  if (!mounted) return <div className="p-10 animate-pulse text-[var(--text-muted)] text-xs font-black uppercase tracking-widest">{t("loading")}</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-12">
      {/* Header */}
      <section className="space-y-3 relative">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[80px] -z-10" />
        <div className="space-y-1.5">
          <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight uppercase tracking-widest">{t("title")}</h1>
          <div className="w-16 h-1.5 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]/30"></div>
          <p className="text-[var(--text-secondary)] max-w-2xl text-xs font-medium opacity-80 pt-2 leading-relaxed uppercase tracking-wider">{t("subtitle")}</p>
        </div>
      </section>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* GitHub Contributions Main Section */}
        <div className="moving-border lg:col-span-8 bg-[var(--bg-secondary)]/40 backdrop-blur-md border border-[var(--border)] p-6 rounded-3xl space-y-6 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-main)]">GitHub Contributions</h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] text-[9px] font-black text-[var(--accent)] uppercase tracking-widest shadow-sm">
              <Activity className="w-3 h-3" />
              <span>{contributions?.totalContributions || 0} Total</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex gap-[3px] justify-between overflow-x-auto pb-2 scrollbar-hide">
              {contributions?.contributions ? (
                contributions.contributions.slice(-26).map((week: any, i: number) => (
                  <div key={i} className="flex flex-col gap-[3px] flex-shrink-0">
                    {week.map((day: any, j: number) => (
                      <div
                        key={j}
                        className="w-3 h-3 rounded-[2px] transition-all duration-300 hover:scale-150 z-10"
                        style={{ backgroundColor: day.contributionCount > 0 ? day.color : "var(--bg-main)" }}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                      ></div>
                    ))}
                  </div>
                ))
              ) : (
                Array.from({ length: 26 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {Array.from({ length: 7 }).map((_, j) => (
                      <div key={j} className="w-3 h-3 rounded-[2px] bg-[var(--bg-main)] opacity-50 animate-pulse"></div>
                    ))}
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-[var(--border)]/30">
              <div className="text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)]">
                Last 6 Months Activity
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)]">Less</span>
                <div className="flex gap-[3px]">
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[var(--bg-main)]"></div>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#9be9a8]"></div>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#40c463]"></div>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#30a14e]"></div>
                  <div className="w-2.5 h-2.5 rounded-[1px] bg-[#216e39]"></div>
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)]">More</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="lg:col-span-4 space-y-6">
          <a href="https://github.com/hdibudihardoyo" target="_blank" className="moving-border block bg-[var(--bg-secondary)]/40 backdrop-blur-md border border-[var(--border)] p-6 rounded-3xl space-y-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-1000">
              <StackIcon name="github" />
            </div>

            <div className="flex items-center gap-4 relative z-10">
              {githubData?.avatar_url ? (
                <img src={githubData.avatar_url} alt="GitHub Avatar" className="w-12 h-12 rounded-full border-2 border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-500" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[var(--bg-main)] animate-pulse border-2 border-[var(--border)]" />
              )}
              <div className="space-y-0.5">
                <h2 className="text-xs font-black text-[var(--text-main)] uppercase tracking-widest">{githubData?.name || "hdibudihardoyo"}</h2>
                <p className="text-[var(--text-secondary)] text-[9px] font-bold tracking-widest">@{githubData?.login || "hdibudihardoyo"}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 relative z-10 mt-2">
              <div className="space-y-1 bg-[var(--bg-main)]/40 p-3 rounded-2xl border border-[var(--border)] text-center group-hover:border-[var(--accent)]/20 transition-colors">
                <p className="text-lg font-black text-[var(--text-main)] tracking-tighter">{githubData?.public_repos !== undefined ? githubData.public_repos : "-"}</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">Repositories</p>
              </div>
              <div className="space-y-1 bg-[var(--bg-main)]/40 p-3 rounded-2xl border border-[var(--border)] text-center group-hover:border-[var(--accent)]/20 transition-colors">
                <p className="text-lg font-black text-[var(--text-main)] tracking-tighter">{githubData?.followers !== undefined ? githubData.followers : "-"}</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">Followers</p>
              </div>
              <div className="space-y-1 bg-[var(--bg-main)]/40 p-3 rounded-2xl border border-[var(--border)] text-center group-hover:border-[var(--accent)]/20 transition-colors">
                <p className="text-lg font-black text-[var(--text-main)] tracking-tighter">{githubData?.following !== undefined ? githubData.following : "-"}</p>
                <p className="text-[7px] font-black uppercase tracking-widest text-[var(--text-muted)]">Following</p>
              </div>
            </div>

            <div className="pt-2 relative z-10 border-t border-[var(--border)]/30 mt-4">
              <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-[var(--text-muted)] pt-3">
                <span>View Profile & Activity</span>
                <div className="w-4 h-4 rounded bg-[var(--accent)] flex items-center justify-center text-[var(--accent-text)] text-[10px] font-black group-hover:scale-110 transition-transform">H</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}