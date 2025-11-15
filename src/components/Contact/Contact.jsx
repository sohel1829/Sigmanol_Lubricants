import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">
            Contact Us
          </h2>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <p className="contact__info-text">
              Our team is ready to assist you with all your lubrication needs. Whether you need technical support, product recommendations, or want to learn more about our solutions, we're here to help.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9922509850</p>
                  <p>+91 7420907528</p>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>sigmanol2016@gmail.com</p>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>
                    Sigmanol Lubricants & Specialities<br />
                    902, C4, Avalon City<br />
                    Mumbai Pune Highway<br />
                    Dapodi, Pune-411012
                  </p>
                </div>
              </div>

              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Friday - Wednesday: 9:00 AM - 6:00 PM</p>
                  <p>Thursday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;