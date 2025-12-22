export default function BusinessSection() {
  const businesses = [
    {
      title: 'COSMETICS',
      desc: '미호의 노하우를 담은 코스메틱',
      image: 'https://placehold.co/600x400?text=COSMETICS',
      link: '#',
    },
    {
      title: 'BROW',
      desc: '4년 연속 국내 1위! 100% 책임 시술제',
      image: 'https://placehold.co/600x400?text=BROW',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-white" id="business-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Business</h3>

        <div className="grid grid-cols-2 gap-8">
          {businesses.map((business, index) => (
            <a
              key={index}
              href={business.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={business.image}
                alt={business.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-3xl font-bold mb-2">{business.title}</h4>
                <p className="text-lg mb-4">{business.desc}</p>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full group-hover:scale-110 transition-transform">
                  <i className="ri-arrow-right-line text-2xl text-gray-900"></i>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
