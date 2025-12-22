import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: 'https://cellting.com/theme/cellting/images/cheongdam/visual_05.webp',
    mobileImage: 'https://cellting.com/theme/cellting/images/cheongdam/visual_mo_05.jpg',
    title: '세포가 젊어지는 리프팅',
    link: '/treatments'
  },
  {
    id: 2,
    image: 'https://cellting.com/theme/cellting/images/cheongdam/visual_01.webp',
    mobileImage: 'https://cellting.com/theme/cellting/images/cheongdam/visual_mo_01.jpg',
    title: '리즈셀 리프팅',
    subtitle: '스킨웨이브 플래님과 셀리프팅의 시너지 에디션',
    description: '개개인의 피부 저항값에 따른 최적의 시술 플래닝 안티에이징·피부장벽강화·얼굴라인 개선을 한번에!',
    link: '/treatments/lizcell'
  },
  {
    id: 3,
    image: 'https://cellting.com/theme/cellting/images/cheongdam/visual_02.webp',
    mobileImage: 'https://cellting.com/theme/cellting/images/cheongdam/visual_mo_02.jpg',
    title: '셀트라콜',
    subtitle: '피부 재생력을 끌어오리는 강력한 스킨부스터',
    description: '일반PDO실 1427개를 주입한 효과 셀팅만의 베네핏과 울크라콜의 강력한 시너지',
    link: '/treatments/celltracol'
  },
  {
    id: 4,
    image: 'https://cellting.com/theme/cellting/images/cheongdam/visual_03.webp',
    mobileImage: 'https://cellting.com/theme/cellting/images/cheongdam/visual_mo_03.jpg',
    title: '셀팅 줄기세포',
    subtitle: '피부 속 깊은 곳에서 시작되는 차원이 다른 변화의 경험',
    description: '피부와 신체 내부의 세포 재생 촉진, 손상된 조직과 노화된 피부의 집중 개선',
    link: '/treatments/stemcell'
  },
  {
    id: 5,
    image: 'https://cellting.com/theme/cellting/images/cheongdam/visual_04.webp',
    mobileImage: 'https://cellting.com/theme/cellting/images/cheongdam/visual_mo_04.jpg',
    title: '리즈셀 CEO 패키지',
    subtitle: '성공하는 리더를 위한 프리미엄 리프팅 솔루션',
    description: '바쁜 리더들의 소중한 시간, 다운타임 없는 최적의 피부 솔루션',
    link: '/treatments/ceo-package'
  }
];

export default function HeroSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (swiper) {
      if (isPlaying) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-gray-900">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <picture>
                <source media="(min-width: 769px)" srcSet={slide.image} />
                <img
                  src={slide.mobileImage}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 text-white">
        <div className="flex items-center gap-2 text-sm font-light">
          <span className="text-lg font-medium">{currentSlide}</span>
          <span className="text-white/60">/</span>
          <span className="text-white/80">{slides.length}</span>
        </div>
        
        <div className="flex items-center gap-3 ml-4">
          <button
            onClick={() => swiper?.slidePrev()}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="이전 슬라이드"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          
          <button
            onClick={handlePlayPause}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label={isPlaying ? '정지' : '재생'}
          >
            {isPlaying ? (
              <i className="ri-pause-line text-lg"></i>
            ) : (
              <i className="ri-play-line text-lg"></i>
            )}
          </button>
          
          <button
            onClick={() => swiper?.slideNext()}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="다음 슬라이드"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
