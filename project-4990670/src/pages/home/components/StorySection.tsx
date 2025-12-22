export default function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-6">
              Story
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
              당신만의 아름다운 기억을 되찾는 여정,<br />
              윤상아가 함께합니다
            </p>
            <p className="text-base text-gray-600 mb-8">
              대표원장 윤상아
            </p>
            <a
              href="/about/director"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              view more
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="https://cellting.com/theme/cellting/images/img_story_doctor_cheongdam.png"
                  alt="윤상아 원장님"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
