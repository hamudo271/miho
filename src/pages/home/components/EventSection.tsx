import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EventSection() {
  const swiperRef = useRef<Swiper | null>(null);

  const events = [
    {
      title: '사실 산타는 있어, 미호에!',
      date: '2025.12.01 - 2025.12.31',
      image: 'https://vgzol4tn11543.edge.naverncp.com/toxnfill/imges/brand/icon/2025/2025_dec_santa.png',
      link: 'https://www.toxnfill.com/brandEventView.php?gubun=1&idx=32416&pno=1',
    },
    {
      title: '비수술 지방분해 ZERO FIT',
      date: '2025.01.01 - 2025.12.31',
      image: 'https://www.toxnfill.com/imges/brand/icon/2025/event_dummy_2.jpg',
      link: 'https://www.toxnfill.com/brandEventView.php?gubun=1&idx=7691&pno=1',
    },
    {
      title: '정석은 관리부터, 맨즈 스피드 케어',
      date: '2025.01.01 - 2025.12.31',
      image: 'https://www.toxnfill.com/imges/brand/icon/2025/event_dummy_3.jpg',
      link: 'https://www.toxnfill.com/brandEventView.php?gubun=1&idx=11874&pno=1',
    },
    {
      title: '라인이 살아나는 FILLER',
      date: '2025.01.01 - 2025.12.31',
      image: 'https://www.toxnfill.com/imges/brand/icon/2025/event_dummy_4.jpg',
      link: 'https://www.toxnfill.com/brandEventView.php?gubun=1&idx=27&pno=1',
    },
  ];

  useEffect(() => {
    swiperRef.current = new Swiper('.event-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.event-button-next',
        prevEl: '.event-button-prev',
      },
      pagination: {
        el: '.event-pagination',
        clickable: true,
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-primary" id="event-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-4xl font-bold text-white">Event</h3>
          <a
            href="/brandEvent1.php"
            className="text-white hover:opacity-80 transition-opacity cursor-pointer"
          >
            전지점 이벤트 보러가기 →
          </a>
        </div>

        <div className="relative">
          <div className="swiper event-swiper overflow-hidden">
            <div className="swiper-wrapper">
              {events.map((event, index) => (
                <div key={index} className="swiper-slide">
                  <a
                    href={event.link}
                    className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="event-button-prev w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all cursor-pointer">
              <i className="ri-arrow-left-s-line text-2xl text-white"></i>
            </button>
            <div className="event-pagination flex gap-2"></div>
            <button className="event-button-next w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all cursor-pointer">
              <i className="ri-arrow-right-s-line text-2xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
