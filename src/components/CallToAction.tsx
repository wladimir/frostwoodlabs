import React from "react";
import { ArrowUpRight } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--color-yellow)" }}
    >
      <div className="container-max px-0">
        <div className="brutalist-border bg-white brutal-shadow p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="tag">Next steps</span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] text-black">
              Let’s build something unmistakable.
            </h2>
            <p
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-ink-soft)" }}
            >
              Tell us what you are building, what is on fire, or where you want
              to go. We will respond inside one business day with a path
              forward.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="mailto:hello@frostwoodlabs.com"
              className="btn-primary text-base sm:text-lg hover:-translate-y-1"
            >
              Email the studio
              <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+13074522403"
              className="btn-secondary text-base sm:text-lg hover:-translate-y-1"
            >
              Call +1 (307) 452-2403
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
