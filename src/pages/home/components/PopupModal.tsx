import { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface PopupModalProps {
  onClose: () => void;
}

export default function PopupModal({ onClose }: PopupModalProps) {
  const swiperRef = useRef<Swiper | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const popups = [
    {
      title: 'MERRY MIHO-MAS!',
      image: 'https://placehold.co/600x800?text=MERRY+MIHO-MAS',
      link: '#',
    },
    {
      title: '신논현점 VIP ZONE',
      image: 'https://placehold.co/600x800?text=VIP+ZONE',
      link: '#',
    },
    {
      title: '카데바 워크숍',
      image: 'https://placehold.co/600x800?text=Workshop',
      link: '#',
    },
    {
      title: '써마지 마스터 클래스',
      image: 'https://placehold.co/600x800?text=Thermage',
      link: '#',
    },
    {
      title: '미호 브로우',
      image: 'https://placehold.co/600x800?text=MIHO+BROW',
      link: '#',
    },
  ];

  useEffect(() => {
    swiperRef.current = new Swiper('.popup-swiper', {
      modules: [Pagination],
      pagination: {
        el: '.popup-pagination',
        clickable: true,
        renderBullet: (index: number, className: string) => {
          return `<div class="${className}"><p><span>${popups[index].title}</span></p></div>`;
        },
      },
      on: {
        slideChange: (swiper) => {
          setCurrentSlide(swiper.realIndex);
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  const handleCloseToday = () => {
    localStorage.setItem('hidePopupToday', new Date().toDateString());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
        <div className="swiper popup-swiper">
          <div className="swiper-wrapper">
            {popups.map((popup, index) => (
              <div key={index} className="swiper-slide">
                {popup.link ? (
                  <a href={popup.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    <img src={popup.image} alt={popup.title} className="w-full" />
                  </a>
                ) : (
                  <img src={popup.image} alt={popup.title} className="w-full" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="popup-pagination flex justify-center gap-2 py-4 bg-gray-50"></div>

        <div className="flex border-t border-gray-200">
          <button
            onClick={handleCloseToday}
            className="flex-1 py-4 text-gray-700 hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap"
          >
            오늘은 그만 볼래요
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-4 text-gray-700 hover:bg-gray-50 transition-all border-l border-gray-200 cursor-pointer whitespace-nowrap"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
