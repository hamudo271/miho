const researchImages = [
  'https://cellting.com/theme/cellting/images/img_research01.png',
  'https://cellting.com/theme/cellting/images/img_research02.png',
  'https://cellting.com/theme/cellting/images/img_research03.png',
  'https://cellting.com/theme/cellting/images/img_research04.png',
  'https://cellting.com/theme/cellting/images/img_research05_cheongdam.png'
];

export default function ResearchSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-4">
            Research
          </h2>
          <p className="text-lg text-gray-600">
            줄기세포 연구실
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {researchImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`연구실 이미지 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
