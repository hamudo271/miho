import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import EventSection from './components/EventSection';
import SignatureSection from './components/SignatureSection';
import CompareSection from './components/CompareSection';
import StorySection from './components/StorySection';
import ResearchSection from './components/ResearchSection';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import QuickMenu from '../../components/feature/QuickMenu';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <EventSection />
        <SignatureSection />
        <CompareSection />
        <StorySection />
        <ResearchSection />
      </main>
      <Footer />
      <QuickMenu />
    </div>
  );
}
