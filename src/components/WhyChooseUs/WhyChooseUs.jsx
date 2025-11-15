import React from 'react';
import { CheckCircle, Award, Shield, Zap, Users, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.scss';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Industry-leading formulations that meet the highest international standards and certifications.'
    },
    {
      icon: Shield,
      title: 'Reliable Protection',
      description: 'Advanced additives that provide superior wear protection and extend equipment life significantly.'
    },
    {
      icon: Zap,
      title: 'Peak Performance',
      description: 'Optimized lubricants that maximize efficiency, reduce friction, and enhance operational performance.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated technical team providing application guidance and customized solutions for your needs.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focus',
      description: 'Committed to building lasting partnerships through exceptional service and product quality.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Decades of successful applications across diverse industries and demanding environments.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="why-choose-us__container">
        <div className="why-choose-us__header">
          <h2 className="why-choose-us__title">
            Why Choose Sigmanol?
          </h2>
          <p className="why-choose-us__subtitle">
            Experience the difference of working with a trusted lubrication partner committed to your success
          </p>
        </div>

        <div className="why-choose-us__grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">
                  <Icon size={28} />
                </div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="why-choose-us__cta">
          <h3>Ready to Experience Superior Lubrication?</h3>
          <p>
            Purchase with Sigmanol for reliable, high-performance lubricants that keep your operations running smoothly.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;