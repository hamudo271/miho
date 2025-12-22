import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PromisesSection() {
  const swiperRef = useRef<Swiper | null>(null);

  const branches = [
    { name: '미호 강남본점', image: 'https://placehold.co/300x400?text=Gangnam' },
    { name: '미호 강동천호점', image: 'https://placehold.co/300x400?text=Gangdong' },
    { name: '미호 강서점', image: 'https://placehold.co/300x400?text=Gangseo' },
    { name: '미호 건대점', image: 'https://placehold.co/300x400?text=Konkuk' },
    { name: '미호 광주점', image: 'https://placehold.co/300x400?text=Gwangju' },
    { name: '미호 구리점', image: 'https://placehold.co/300x400?text=Guri' },
    { name: '미호 노원점', image: 'https://placehold.co/300x400?text=Nowon' },
    { name: '미호 명동점', image: 'https://placehold.co/300x400?text=Myeongdong' },
    { name: '미호 목동점', image: 'https://placehold.co/300x400?text=Mokdong' },
    { name: '미호 미아사거리점', image: 'https://placehold.co/300x400?text=Mia' },
    { name: '미호 부산서면점', image: 'https://placehold.co/300x400?text=Busan' },
    { name: '미호 부천점', image: 'https://placehold.co/300x400?text=Bucheon' },
  ];

  useEffect(() => {
    swiperRef.current = new Swiper('.promises-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: '.promises-button-next',
        prevEl: '.promises-button-prev',
      },
      pagination: {
        el: '.promises-pagination',
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
    <section className="py-20 bg-primary" id="promises-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center mb-20">
          <div className="text-white">
            <img
              src="/miho/logo_w.svg"
              alt="MIOHO"
              className="h-12 mb-8"
            />
            <h3 className="text-5xl font-bold mb-6">3 PROMISES</h3>
            <p className="text-xl leading-relaxed">
              미호는
              <br />
              3正(정품.정량.정성)서약으로
              <br />
              고객님께 정직과 신뢰를
              <br />
              약속드립니다.
            </p>
          </div>

          <div className="aspect-video rounded-2xl overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://placehold.co/1920x1080?text=Video+Poster"
              className="w-full h-full object-cover"
            >
              {/* <source src="..." type="video/mp4" /> */}
            </video>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            미호 3正 인증 의원을 소개합니다.
          </h3>

          <div className="relative">
            <div className="swiper promises-swiper overflow-hidden">
              <div className="swiper-wrapper">
                {branches.map((branch, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-lg font-medium">{branch.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="promises-button-prev w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all cursor-pointer">
                <i className="ri-arrow-left-s-line text-2xl text-white"></i>
              </button>
              <div className="promises-pagination flex gap-2"></div>
              <button className="promises-button-next w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all cursor-pointer">
                <i className="ri-arrow-right-s-line text-2xl text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
