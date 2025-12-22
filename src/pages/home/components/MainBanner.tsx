import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    image: '/miho/images/banner_slide_1.png',
    mobileImage: '/miho/images/banner_slide_1.png',
    title: '세포가 젊어지는 리프팅',
    subtitle: '미호 리프팅',
    description: '피부 속부터 차오르는 탄력',
    link: '#treatments'
  },
  {
    id: 2,
    image: '/miho/images/banner_slide_2.png',
    mobileImage: '/miho/images/banner_slide_2.png',
    title: '리즈셀 리프팅',
    subtitle: '프리미엄 리프팅',
    description: '당신의 리즈 시절을 되찾아드립니다',
    link: '#treatments/lizcell'
  },
  {
    id: 3,
    image: '/miho/images/banner_slide_5.png', // Celltracol
    mobileImage: '/miho/images/banner_slide_5.png',
    title: '셀트라콜',
    subtitle: '콜라겐 생성 촉진',
    description: '자연스러운 볼륨감 완성',
    link: '#treatments/celltracol'
  },
  {
    id: 4,
    image: '/miho/images/banner_slide_3.png', // Stem Cell
    mobileImage: '/miho/images/banner_slide_3.png',
    title: '미호 줄기세포',
    subtitle: '근본적인 피부 개선',
    description: '건강한 아름다움의 시작',
    link: '#treatments/stemcell'
  },
  {
    id: 5,
    image: '/miho/images/banner_slide_4.png', // CEO
    mobileImage: '/miho/images/banner_slide_4.png',
    title: '리즈셀 CEO 패키지',
    subtitle: '성공하는 리더를 위한 프리미엄 리프팅 솔루션',
    description: '바쁜 리더들의 소중한 시간, 다운타임 없는 최적의 피부 솔루션',
    link: '#treatments/ceo-package'
  }
];

export default function MainBanner() {
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
