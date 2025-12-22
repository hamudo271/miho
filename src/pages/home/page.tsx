import { useEffect, useState } from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import BranchSection from './components/BranchSection';
import NewEventSection from './components/NewEventSection';
import NewSignatureSection from './components/NewSignatureSection';
import BeforeAfterSection from './components/BeforeAfterSection';
import BrandValueSection from './components/BrandValueSection';
import PromisesSection from './components/PromisesSection';
import BusinessSection from './components/BusinessSection';
import SnsSection from './components/SnsSection';
import Footer from './components/Footer';
import QuickCounsel from './components/QuickCounsel';


export default function HomePage() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <MainBanner />
      <BranchSection />
      <NewEventSection />
      <NewSignatureSection />
      <BeforeAfterSection />
      <BrandValueSection />
      <PromisesSection />
      <BusinessSection />
      <SnsSection />
      <Footer />
      <QuickCounsel />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-40 cursor-pointer"
        aria-label="맨 위로"
      >
        <i className="ri-arrow-up-line text-2xl text-gray-700"></i>
      </button>


    </div>
  );
}
