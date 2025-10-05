import React from "react";
import {
  Cloud,
  Code,
  Globe,
  Link,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { Service } from "../types";

const services: Service[] = [
  {
    title: "Platform Engineering",
    description:
      "Event-driven backends, modular APIs, and infrastructure as code built for heavy traffic and rapid change.",
    icon: "Code",
  },
  {
    title: "Interface Systems",
    description:
      "Accessible, high-performance web experiences that keep teams and customers moving quickly.",
    icon: "Globe",
  },
  {
    title: "Mobile & Edge",
    description:
      "Native and cross-platform apps with offline-first behavior, fluid motion, and modern deployment pipelines.",
    icon: "Smartphone",
  },
  {
    title: "Cloud & Data Ops",
    description:
      "Scalable data ingestion, AI-powered intelligence layers, and observability to keep every release honest.",
    icon: "Cloud",
  },
  {
    title: "Integration Fabric",
    description:
      "We connect your ecosystem with resilient automation, secure APIs, and governance that stands audits.",
    icon: "Link",
  },
  {
    title: "Advisory & Rescue",
    description:
      "Fractional leadership, due diligence, and product rescue missions when ambition outruns delivery.",
    icon: "MessageSquare",
  },
];

type ServiceCardProps = Service & { index: number };

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-7 w-7" />;
      case "Smartphone":
        return <Smartphone className="h-7 w-7" />;
      case "Cloud":
        return <Cloud className="h-7 w-7" />;
      case "Globe":
        return <Globe className="h-7 w-7" />;
      case "Link":
        return <Link className="h-7 w-7" />;
      case "MessageSquare":
        return <MessageSquare className="h-7 w-7" />;
      default:
        return <Code className="h-7 w-7" />;
    }
  };

  return (
    <div className="brutalist-border bg-white brutal-shadow p-6 sm:p-8 flex flex-col gap-6 transition-transform duration-200 ease-out hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <span className="text-4xl font-extrabold uppercase tracking-tight text-black/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[var(--color-mint)] text-black">
          {getIcon()}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-extrabold uppercase tracking-widest text-black">
          {title}
        </h3>
        <p
          className="mt-3 text-base sm:text-lg font-semibold"
          style={{ color: "var(--color-ink-subtle)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="section-padding decor-grid"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-max px-0">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
          <div className="max-w-2xl space-y-6">
            <span className="tag">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase leading-[0.95]">
              Services built for shipping fast.
            </h2>
            <p
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-ink-soft)" }}
            >
              We ship our own products and help you ship yours. From sketch to
              launch to optimization—high pressure, short cycles, solid
              engineering.
            </p>
            <div className="brutalist-border bg-white brutal-shadow p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-black/60">
                What to expect
              </p>
              <ul
                className="mt-5 space-y-3 text-base sm:text-lg font-semibold"
                style={{ color: "var(--color-ink-subtle)" }}
              >
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-black"></span>
                  Transparency with live demos and telemetry you can see.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-black"></span>
                  Senior product, design, and engineering people on your team.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-black"></span>
                  Stacks that last: TypeScript, React, Java, Golang, Node, cloud
                  infrastructure.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
