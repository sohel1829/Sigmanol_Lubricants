import React from 'react';
import { Car, Factory, Cog, Droplet, Truck, Settings } from 'lucide-react';
import './Products.scss';

const Products = () => {
  const products = [
    {
      icon: Car,
      title: 'Automotive Lubricants',
      description: 'Premium engine oils, transmission fluids, and specialty automotive lubricants for passenger and commercial vehicles.',
      image: 'images/photo-1567789884554-0b844b597180.jpg',
      features: ['Engine Oils', 'Transmission Fluids', 'Brake Fluids', 'Coolants']
    },
    {
      icon: Factory,
      title: 'Industrial Lubricants',
      description: 'High-performance industrial oils and greases designed for demanding manufacturing and processing environments.',
      image: 'images/pexels-photo-1145434.jpeg',
      features: ['Hydraulic Oils', 'Gear Oils', 'Compressor Oils', 'Turbine Oils']
    },
    {
      icon: Cog,
      title: 'Specialty Products',
      description: 'Advanced specialty lubricants and additives for unique industrial applications and extreme conditions.',
      image: 'images/gears-cogs-machine-machinery-159298.jpeg',
      features: ['Food Grade', 'High Temperature', 'Synthetic Oils', 'Greases']
    },
    {
      icon: Droplet,
      title: 'Metalworking Fluids',
      description: 'Cutting-edge metalworking fluids for machining, grinding, and forming operations.',
      image: 'images/photo-1763076470513-c21b9d7f7e75.jpg',
      features: ['Cutting Oils', 'Coolants', 'Neat Oils', 'Emulsions']
    },
    {
      icon: Truck,
      title: 'Heavy Duty Oils',
      description: 'Robust lubricants for heavy machinery, construction equipment, and mining operations.',
      image: 'images/pexels-photo-70912.jpeg',
      features: ['Diesel Engine Oils', 'Heavy Duty Greases', 'Off-Road Oils', 'Mining Lubricants']
    },
    {
      icon: Settings,
      title: 'Maintenance Products',
      description: 'Complete range of maintenance and specialty chemicals for equipment care and protection.',
      image: 'images/vehicle-chrome-technology-automobile-65623.jpeg',
      features: ['Cleaners', 'Degreasers', 'Rust Preventives', 'Penetrants']
    }
  ];

  return (
    <section id="products" className="products">
      <div className="products__container">
        <div className="products__header">
          <h2 className="products__title">
            Our Product Range
          </h2>
          <p className="products__subtitle">
            Comprehensive lubrication solutions engineered for excellence across all industries
          </p>
        </div>

        <div className="products__grid">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div key={index} className="product-card">
                <div className="product-card__image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card__image"
                  />
                  <div className="product-card__overlay"></div>
                  <div className="product-card__icon">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="product-card__content">
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__description">{product.description}</p>
                  
                  <div className="product-card__features">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="product-card__feature">
                        <div className="product-card__feature-dot"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;