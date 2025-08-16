
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import OrderForm from '@/components/OrderForm';
import Results from '@/components/Results';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import SeoSection from '@/components/SeoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OrderForm />
        <Results />
        <Blog />
        <FAQ />
      </main>
      <SeoSection />
      <Footer />
    </div>
  );
};

export default Index;
