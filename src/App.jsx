import { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatbotSection from './components/ChatbotSection';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <ChatbotSection />
      <Testimonials />
      <CTA />
    </main>
  );
}

export default App;
