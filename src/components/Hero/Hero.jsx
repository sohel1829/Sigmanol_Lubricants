import React from 'react';
import { ArrowRight, Shield, Award, Zap } from 'lucide-react';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__background">
        <img
          src="https://images.unsplash.com/photo-1717386255773-1e3037c81788"
          alt="Industrial Manufacturing"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Sigmanol Lubricants & Specialities
          </h1>
          <p className="hero__subtitle">
            Powering industries with advanced lubricants and specialities that deliver exceptional performance, reliability, and protection.
          </p>
          <div className="hero__buttons">
            <button onClick={() => scrollToSection('products')} className="hero__btn hero__btn--primary">
              Explore Products
              <ArrowRight className="hero__btn-icon" size={20} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="hero__btn hero__btn--secondary">
              Contact Us
            </button>
          </div>

          <div className="hero__features">
            <div className="hero__feature">
              <Shield size={32} />
              <h3>Premium Quality</h3>
              <p>Industry-leading formulations for optimal performance</p>
            </div>
            <div className="hero__feature">
              <Award size={32} />
              <h3>Trusted Brand</h3>
              <p>Decades of excellence in lubrication technology</p>
            </div>
            <div className="hero__feature">
              <Zap size={32} />
              <h3>Peak Performance</h3>
              <p>Engineered for maximum efficiency and durability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;