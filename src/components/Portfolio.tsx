import React from 'react';
import { ExternalLink, Code, Smartphone, Cloud, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  icon: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with inventory management, payment processing, and analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    category: "Web Development",
    icon: "Globe"
  },
  {
    title: "Fleet Management App",
    description: "Mobile app for tracking vehicle locations, maintenance schedules, and driver performance metrics.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    category: "Mobile App",
    icon: "Smartphone"
  },
  {
    title: "Cloud Migration Project",
    description: "Migrated legacy on-premise system to AWS with 99.9% uptime and 40% cost reduction.",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    category: "Cloud Solutions",
    icon: "Cloud"
  },
  {
    title: "Custom CRM System",
    description: "Tailored customer relationship management system with automated workflows and reporting.",
    tech: ["Python", "Django", "React", "PostgreSQL"],
    category: "Custom Software",
    icon: "Code"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time business intelligence dashboard with interactive charts and automated reporting.",
    tech: ["Vue.js", "D3.js", "Python", "Redis"],
    category: "Web Development",
    icon: "Globe"
  },
  {
    title: "IoT Monitoring System",
    description: "Industrial IoT solution for monitoring equipment health and predictive maintenance.",
    tech: ["Node.js", "InfluxDB", "Grafana", "MQTT"],
    category: "Custom Software",
    icon: "Code"
  }
];

const ProjectCard: React.FC<Project> = ({ title, description, tech, category, icon, link }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Code':
        return <Code className="h-8 w-8 text-black" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-black" />;
      case 'Cloud':
        return <Cloud className="h-8 w-8 text-black" />;
      case 'Globe':
        return <Globe className="h-8 w-8 text-black" />;
      default:
        return <Code className="h-8 w-8 text-black" />;
    }
  };

  return (
    <div className="brutalist-border brutalist-bg p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center">
          {getIcon()}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-red-600 transition-colors"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
        )}
      </div>
      
      <span className="text-sm font-extrabold text-red-600 uppercase mb-2">{category}</span>
      <h3 className="text-xl font-extrabold text-black uppercase mb-3">{title}</h3>
      <p className="text-black mb-4 flex-grow">{description}</p>
      
      <div className="border-t-4 border-black pt-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((technology, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-extrabold text-black border-2 border-black uppercase"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section-padding brutalist-bg border-b-8 border-black">
      <div className="container-max px-0">
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="brutalist-border brutalist-bg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-black uppercase mb-4">Start Your Project</h3>
            <p className="text-lg text-black mb-6">
              Ready to see your vision come to life? Let's discuss your requirements.
            </p>
            <a
              href="#contact"
              className="btn-primary text-lg"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;