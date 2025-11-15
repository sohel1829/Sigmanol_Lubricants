import React from 'react';
import { Target, Users, Globe, TrendingUp } from 'lucide-react';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__grid">
          <div className="about__image-wrapper">
            <img
              src="images/photo-1738918903155-0601cdc65818.jpg"
              alt="Industrial Lubricants"
              className="about__image"
            />
            <div className="about__badge">
              <div className="about__badge-number">10+</div>
              <div className="about__badge-text">Years of Excellence</div>
            </div>
          </div>

          <div className="about__content">
            <h2 className="about__title">
              About Sigmanol Lubricants & Specialities
            </h2>
            <p className="about__text">
              At Sigmanol, we are committed to delivering world-class lubrication solutions that keep industries running smoothly. Our advanced formulations are designed to meet the demanding needs of modern machinery and equipment.
            </p>
            <p className="about__text">
              With decades of expertise in lubricant technology, we provide innovative products that enhance performance, extend equipment life, and reduce operational costs across automotive, industrial, and specialty applications.
            </p>

            <div className="about__stats">
              <div className="about__stat">
                <div className="about__stat-icon">
                  <Target size={24} />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>Deliver excellence in every drop</p>
                </div>
              </div>
              <div className="about__stat">
                <div className="about__stat-icon">
                  <Users size={24} />
                </div>
                <div>
                  <h4>Expert Team</h4>
                  <p>Industry professionals</p>
                </div>
              </div>
              <div className="about__stat">
                <div className="about__stat-icon">
                  <Globe size={24} />
                </div>
                <div>
                  <h4>Wide Reach</h4>
                  <p>Serving diverse industries</p>
                </div>
              </div>
              <div className="about__stat">
                <div className="about__stat-icon">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4>Innovation</h4>
                  <p>Cutting-edge technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;