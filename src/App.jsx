import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReserveSection from './components/ReserveSection';
import Services from './components/Services';
import Fleet from './components/Fleet';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <ReserveSection />
        <Services />
        <Fleet />
        <WhyChooseUs />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
