import { useState, useEffect } from 'react';

export default function QuickMenu() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href="tel:1555-1527"
        className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer group"
      >
        <i className="ri-phone-line text-xl"></i>
        <span className="text-[10px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">전화</span>
      </a>

      {/* KakaoTalk Button */}
      <a
        href="https://pf.kakao.com/_NxmpGn/chat"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full shadow-lg flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer group"
      >
        <i className="ri-kakao-talk-fill text-xl"></i>
        <span className="text-[10px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">카톡</span>
      </a>

      {/* Reservation Button */}
      <a
        href="/reservation"
        className="w-14 h-14 bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer group"
      >
        <i className="ri-calendar-check-line text-xl"></i>
        <span className="text-[10px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">예약</span>
      </a>

      {/* Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg flex flex-col items-center justify-center transition-all hover:scale-110 cursor-pointer group"
        >
          <i className="ri-arrow-up-line text-xl"></i>
          <span className="text-[10px] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">TOP</span>
        </button>
      )}
    </div>
  );
}
