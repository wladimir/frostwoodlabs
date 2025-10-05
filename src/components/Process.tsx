import React from "react";
import { Compass, Wrench, Rocket } from "lucide-react";

type Step = {
  title: string;
  description: string;
  meta: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    title: "Discovery sprints",
    description:
      "We align on ambition, interrogate the data, and co-design a roadmap that pairs ruthless prioritisation with measurable outcomes.",
    meta: "Phase 01 · Days 0–10",
    icon: Compass,
  },
  {
    title: "Design & build circuits",
    description:
      "Product design, system architecture, and implementation run in parallel, supported by rapid prototypes and feedback rituals.",
    meta: "Phase 02 · Weeks 2–6",
    icon: Wrench,
  },
  {
    title: "Launch & amplify",
    description:
      "We harden infrastructure, ship continuously, and equip your team with playbooks, telemetry, and ongoing partnership options.",
    meta: "Phase 03 · Weeks 6+",
    icon: Rocket,
  },
];

const Process: React.FC = () => {
  return (
    <section
      className="section-padding text-white border-y-8 border-black"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div className="container-max px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,3fr)] items-start">
          <div className="space-y-6 max-w-xl">
            <span className="tag tag-light">Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] text-white">
              How we keep momentum high.
            </h2>
            <p className="text-lg md:text-xl font-semibold text-white/80">
              Frostwood Labs runs engagements in short cycles — heavy on signal,
              light on ceremony. The same team that architected your solution
              ships it, instruments it, and stands behind it.
            </p>
          </div>
          <div className="grid gap-6">
            {steps.map(({ title, description, meta, icon: Icon }) => (
              <div
                key={title}
                className="border-2 border-white bg-white/5 p-6 sm:p-8 transition-transform duration-200 ease-out hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-white bg-white text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-white/60">
                      {meta}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold uppercase text-white">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-base sm:text-lg font-semibold text-white/80">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
