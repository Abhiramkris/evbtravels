import React from 'react';
import About from '../components/About';
import FAQ from '../components/FAQ';

export default function AboutPage() {
  return (
    <main style={{ flexGrow: 1, paddingTop: '40px' }}>
      <About />
      <FAQ />
    </main>
  );
}
