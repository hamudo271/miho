import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SignatureSection() {
  const swiperRef = useRef<Swiper | null>(null);

  const signatures = [
    {
      title: '4세대 써마지 FLX',
      desc: '강력한 고주파가 전달하는\n피부 타이트닝의 기준',
      image: 'https://placehold.co/400x300?text=Thermage',
      link: '#',
    },
    {
      title: '울쎄라',
      desc: '진피 속 콜라겐 자극과\n리프팅을 한번에!',
      image: 'https://placehold.co/400x300?text=Ulthera',
      link: '#',
    },
    {
      title: '엑소좀',
      desc: '피부 근본을 튼튼하게 잡아주는\n줄기세포 배양액',
      image: 'https://placehold.co/400x300?text=Exosome',
      link: '#',
    },
    {
      title: '쥬베룩',
      desc: '피부에 자연스럽게 스며드는\n볼륨과 탄력',
      image: 'https://placehold.co/400x300?text=Juvelook',
      link: '#',
    },
    {
      title: '리쥬란 힐러',
      desc: '피부 본연의 재생력을 깨우는 주름개선,\n넘치는 탄력의 시작',
      image: 'https://placehold.co/400x300?text=Rejuran',
      link: '#',
    },
    {
      title: '슈링크 유니버스',
      desc: '2가지 모드로 더욱 빠르고 강력해진\n초음파 리프팅',
      image: 'https://placehold.co/400x300?text=Shurink',
      link: '#',
    },
  ];

  useEffect(() => {
    swiperRef.current = new Swiper('.signature-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.signature-button-next',
        prevEl: '.signature-button-prev',
      },
      pagination: {
        el: '.signature-pagination',
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
    <section className="py-20 bg-gray-50" id="signature-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Signature</h3>

        <div className="relative">
          <div className="swiper signature-swiper overflow-hidden">
            <div className="swiper-wrapper">
              {signatures.map((signature, index) => (
                <div key={index} className="swiper-slide">
                  <a
                    href={signature.link}
                    className="block bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={signature.image}
                        alt={signature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{signature.title}</h4>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{signature.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="signature-button-prev w-12 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all cursor-pointer">
              <i className="ri-arrow-left-s-line text-2xl text-gray-700"></i>
            </button>
            <div className="signature-pagination flex gap-2"></div>
            <button className="signature-button-next w-12 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-all cursor-pointer">
              <i className="ri-arrow-right-s-line text-2xl text-gray-700"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
