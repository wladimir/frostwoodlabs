import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechStart Inc",
    content: "Frostwood Labs delivered our e-commerce platform ahead of schedule and under budget. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5
  },
  {
    name: "Mike Chen",
    title: "Founder",
    company: "DataFlow Solutions",
    content: "The mobile app they built for us increased our user engagement by 300%. Professional, reliable, and truly understands our business needs.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    title: "Product Manager",
    company: "InnovateNow",
    content: "Outstanding cloud migration services. They handled our entire infrastructure transition seamlessly with zero downtime. Highly recommended!",
    rating: 5
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, title, company, content, rating }) => {
  return (
    <div className="brutalist-border brutalist-bg p-8">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-red-600 fill-current" />
        ))}
      </div>
      <Quote className="h-8 w-8 text-black mb-4" />
      <p className="text-lg text-black font-bold mb-6 leading-relaxed">
        "{content}"
      </p>
      <div className="border-t-4 border-black pt-4">
        <p className="font-extrabold text-black uppercase">{name}</p>
        <p className="text-black font-bold">{title} at {company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding brutalist-bg border-b-8 border-black">
      <div className="container-max px-0">
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="brutalist-border brutalist-bg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-black uppercase mb-4">Ready to Join Them?</h3>
            <p className="text-lg text-black font-bold mb-6">
              Start your success story with a free consultation today.
            </p>
            <a
              href="#contact"
              className="btn-primary text-lg"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;