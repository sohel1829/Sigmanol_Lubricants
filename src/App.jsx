import React from 'react';
import './styles/App.scss'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;