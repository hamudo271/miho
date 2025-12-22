import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const beforeAfterData = [
  {
    id: 1,
    before: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_oRaxmHQY_13369523659c60ec1e7df1c3488dc280331c3dfa.jpg',
    after: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_Uki0wF9L_d1ed53ad6b90cb1917241b315ae918e463b1aa9a.jpg',
    area: '얼굴전체',
    age: '40대'
  },
  {
    id: 2,
    before: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_xhaDd0pP_59f75ac45b29babdf1e41c3da3d51a8a07717c60.jpg',
    after: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_yjPqUYZz_eef103fab00c126052e389a64108fa478973b5b6.jpg',
    area: '얼굴전체',
    age: '40대'
  },
  {
    id: 3,
    before: 'https://cellting.com/data/file/compare/3533be4703371006a7d442a574a47a13_bBwcALFf_ad849f1ca7014d37482b3c1598886963defdb3b6.jpg',
    after: 'https://cellting.com/data/file/compare/3533be4703371006a7d442a574a47a13_vW8MCVEk_c6095c7168ed6a07d13b5fa739900f1c6e549b18.jpg',
    area: '얼굴전체',
    age: '40대'
  },
  {
    id: 4,
    before: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_s0dx1Cuq_1d8f63571624da395623917d2ddf57bfb19d5a52.jpg',
    after: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_3M4TsCmg_9f7788283efb92b1e9f63c01947bff5cda37d493.jpg',
    area: '얼굴전체',
    age: '40대'
  },
  {
    id: 5,
    before: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_ly8kjArM_88ffec187559500485ee3a323002d68ca5de62a1.jpg',
    after: 'https://cellting.com/data/file/compare/c00695def99932f73320e7bb3424b1f7_rvGNw4fz_a2342ba6bcf74a3ce9bdb9852e008a7d3381643c.jpg',
    area: '얼굴전체',
    age: '40대'
  }
];

export default function CompareSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">
      {/* Marquee Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-serif text-8xl lg:text-[12rem] text-teal-600 mx-8">
              Cellting lifting
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-sm text-teal-600 mb-2">Before & After</h2>
          <p className="text-3xl lg:text-4xl text-gray-900 font-medium">
            어제보다 젊어지는 셀팅의원
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.compare-prev',
              nextEl: '.compare-next',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="compare-swiper pb-4"
          >
            {beforeAfterData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative aspect-[3/4]">
                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-3">
                        <p className="text-white text-xs text-center font-medium">Before</p>
                      </div>
                    </div>
                    <div className="relative aspect-[3/4]">
                      <img
                        src={item.after}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-3">
                        <p className="text-white text-xs text-center font-medium">After</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="compare-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="ri-arrow-left-s-line text-xl lg:text-2xl text-gray-700"></i>
          </button>
          <button className="compare-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            <i className="ri-arrow-right-s-line text-xl lg:text-2xl text-gray-700"></i>
          </button>
        </div>

        {/* Notice */}
        <div className="mt-12 text-center text-xs text-gray-500 space-y-1 max-w-4xl mx-auto">
          <p>※ 셀팅의원의 전후사진은 환자분의 동의하에 동일한 조건에서 촬영되었으며, 신상보호를 위한 모자이크 외에는 어떠한 보정도 하지 않았습니다.</p>
          <p>※ 모든 피부 시술은 환자분의 피부상태에 따라 염증, 화상, 색소침착 등의 부작용이 발생할 수 있음을 의료법에 따라 고지합니다.</p>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
