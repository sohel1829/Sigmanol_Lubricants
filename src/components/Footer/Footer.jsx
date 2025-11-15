import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__company">
              <img
                src="/images/new_sigmanol_logo.png"
                alt="Sigmanol Lubricants & Specialities"
                className="footer__logo"
              />
              <p className="footer__description">
                Leading provider of premium lubricants and specialty products, delivering excellence in performance and reliability across all industries.
              </p>
              {/* <div className="footer__social">
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div> */}
            </div>

            <div className="footer__links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <button onClick={() => {
                    const element = document.getElementById('hero');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    const element = document.getElementById('products');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    const element = document.getElementById('why-choose-us');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer__contact">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <Phone size={16} />
                  <div>
                    <div>+91 9922509850</div>
                    <div>+91 7420907528</div>
                  </div>
                </li>
                <li>
                  <Mail size={16} />
                  <div>
                    <div>sigmanol2016@gmail.com</div>
                  </div>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>
                    Sigmanol Lubricants & Specialities<br />
                    902, C4, Avalon City<br />
                    Mumbai Pune Highway<br />
                    Dapodi, Pune-411012
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-content">
            <p>&copy; {currentYear} Sigmanol Lubricants & Specialities. All rights reserved.</p>
            {/* <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;