import React from "react";
import { ArrowUpRight, Gauge, ShieldCheck, Timer } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    icon: Gauge,
    value: "6 weeks",
    label: "Launch cadence",
    detail: "Typical time from idea to production—for our apps and yours.",
  },
  {
    icon: ShieldCheck,
    value: "99.5% uptime",
    label: "Battle-tested ops",
    detail: "Real reliability across our platforms and client systems.",
  },
  {
    icon: Timer,
    value: "48 hr kickoff",
    label: "Fast starts",
    detail: "Product, design, and engineering—all hands-on from day one.",
  },
];

const focusAreas = [
  "AI systems that solve real problems",
  "Internal tools your team will use",
  "High-trust fintech and data platforms",
  "Product rescue missions",
];

const Hero: React.FC = () => {
  return (
    <section className="hero-surface section-padding pt-32">
      <div className="container-max px-0 relative z-[1]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div className="brutalist-border bg-white brutal-shadow p-8 sm:p-12">
            <span className="tag">Product Studio</span>
            <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-black uppercase leading-[0.95]">
              Effective software that cuts through the noise.
            </h1>
            <p
              className="mt-6 text-lg sm:text-xl font-semibold"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Frostwood Labs engineers unmistakable digital experiences — modern
              platforms, heavy-duty data systems, and interfaces designed to be
              remembered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@frostwoodlabs.com"
                className="btn-primary text-base sm:text-lg hover:-translate-y-1"
              >
                Start a project
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="btn-secondary text-base sm:text-lg hover:-translate-y-1"
              >
                Explore services
              </a>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {stats.map(({ icon: Icon, value, label, detail }) => (
                <div
                  key={label}
                  className="brutalist-border bg-[var(--color-mint)] p-6 flex flex-col gap-3"
                >
                  <Icon className="h-6 w-6 text-black" />
                  <div>
                    <p className="text-3xl font-extrabold uppercase tracking-tight text-black">
                      {value}
                    </p>
                    <p className="text-sm font-extrabold uppercase tracking-widest text-black/70">
                      {label}
                    </p>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-ink-subtle)" }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div
              className="brutalist-border brutal-shadow p-8 sm:p-10"
              style={{ backgroundColor: "var(--color-electric)" }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-black/70">
                Studio model
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold uppercase leading-[1] text-black">
                Strategy, design, and engineering seated at the same table.
              </h2>
              <p className="mt-4 text-base sm:text-lg font-semibold text-black/70">
                Designers, architects, and senior engineers work in parallel
                cycles with transparent rituals — demos twice a week, code you
                can inspect, and playbooks you keep.
              </p>
            </div>
            <div className="brutalist-border bg-white brutal-shadow p-8 sm:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-black/60">
                Focus areas
              </p>
              <ul className="mt-6 space-y-4">
                {focusAreas.map((item, index) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-black bg-[var(--color-mint)] font-extrabold text-sm uppercase tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
