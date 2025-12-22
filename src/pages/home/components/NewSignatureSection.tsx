import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

const signatures = [
    {
        id: 1,
        image: 'https://cellting.com/theme/cellting/images/img_signature01.jpg',
        mobileImage: 'https://cellting.com/theme/cellting/images/img_signature01_mo.jpg',
        subtitle: '스킨웨이브 플래닝과<br/>셀리프팅의 시너지에디션',
        name: '리즈셀리프팅',
        nameEn: 'Lizcell lifting',
        description: '피부 저항값에 따른 맞춤 플래닝<br/>오직 나를 위한 커스터마이징 시술',
        link: '#treatments/lizcell'
    },
    {
        id: 2,
        image: 'https://cellting.com/theme/cellting/images/img_signature02.jpg',
        mobileImage: 'https://cellting.com/theme/cellting/images/img_signature02_mo.jpg',
        subtitle: '성공하는 리더를 위한<br/>프리미엄 리프팅 솔루션',
        name: '리즈셀CEO패키지',
        nameEn: 'Lizcell CEO lifting',
        description: '바쁜 리더들의 소중한 시간,<br/>다운타임 없는 최적의 피부 솔루션',
        link: '#treatments/ceo'
    },
    {
        id: 3,
        image: 'https://cellting.com/theme/cellting/images/img_signature03.jpg',
        mobileImage: 'https://cellting.com/theme/cellting/images/img_signature03_mo.jpg',
        subtitle: '피부 재생력을 끌어올리는<br/>강력한 스킨부스터',
        name: '셀트라콜',
        nameEn: 'Celltracol',
        description: '일반PDO실 1427개를 주입한 효과,<br/>셀팅만의 베넷핏셀과 울트라콜의 강력한 시너지',
        link: '#treatments/celltracol'
    },
    {
        id: 4,
        image: 'https://cellting.com/theme/cellting/images/img_signature04.jpg',
        mobileImage: 'https://cellting.com/theme/cellting/images/img_signature04_mo.jpg',
        subtitle: '피부 속 깊은 곳에서 시작되는<br/>차원이 다른 변화의 경험',
        name: '미호 줄기세포',
        nameEn: 'Steamcell',
        description: '피부와 신체 내부의 세포 재생 촉진,<br/>손상된 조직과 노화된 피부의 집중 개선',
        link: '#treatments/stemcell'
    }
];

export default function NewSignatureSection() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-0">
            <div className="max-w-[1920px] mx-auto">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    className="signature-swiper"
                >
                    {signatures.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
                                {/* Image */}
                                <div className="relative h-[400px] lg:h-auto order-1 lg:order-2">
                                    <picture>
                                        <source media="(min-width: 1024px)" srcSet={item.image} />
                                        <img
                                            src={item.mobileImage}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </picture>
                                </div>

                                {/* Content */}
                                <div className="flex items-center justify-center px-6 py-12 lg:py-20 order-2 lg:order-1">
                                    <div className="max-w-xl">
                                        <h2 className="font-serif text-sm text-primary mb-2">
                                            Miho Signature
                                        </h2>
                                        <p className="text-2xl lg:text-3xl text-gray-900 mb-8 leading-relaxed">
                                            미호의원 시그니처 프로그램
                                        </p>

                                        <p
                                            className="font-serif text-base lg:text-lg text-gray-600 mb-4 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: item.subtitle }}
                                        />

                                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                            {item.name}
                                        </h3>

                                        <p
                                            className="text-gray-600 text-base mb-8 leading-relaxed"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />

                                        <a
                                            href={item.link}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                                        >
                                            view more
                                            <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col gap-3">
                    {signatures.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => swiper?.slideToLoop(index)}
                            className={`text-left px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${activeIndex === index
                                    ? 'bg-primary text-white'
                                    : 'bg-white/90 text-gray-700 hover:bg-white'
                                }`}
                        >
                            <span className="text-xs font-medium">{item.nameEn}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
