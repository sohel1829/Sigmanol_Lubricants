import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__content">
          <div className="navbar__logo" onClick={() => scrollToSection('hero')}>
            <img
              src="/images/new_sigmanol_logo.png" 
              alt="Sigmanol Lubricants & Specialities"
            />
          </div>

          <div className="navbar__menu">
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('why-choose-us')}>Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="navbar__cta">
              Contact Us
            </button>
          </div>

          <button className="navbar__mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="navbar__mobile-menu">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('products')}>Products</button>
          <button onClick={() => scrollToSection('why-choose-us')}>Why Us</button>
          <button onClick={() => scrollToSection('contact')} className="navbar__mobile-cta">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;