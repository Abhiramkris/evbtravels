import React from 'react';
import Hero from '../components/Hero';
import ReserveSection from '../components/ReserveSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import BlogGrid from '../components/BlogGrid';

export default function Home() {
  return (
    <main style={{ flexGrow: 1 }}>
      <Hero />
      <ReserveSection />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <BlogGrid />
    </main>
  );
}
