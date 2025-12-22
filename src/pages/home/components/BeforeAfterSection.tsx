export default function BeforeAfterSection() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/before_after_bg.png)',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <a
        href="/brandBnA.php"
        className="relative z-10 bg-white rounded-2xl p-12 max-w-md text-center hover:shadow-2xl transition-all cursor-pointer"
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-4">시술 전·후사진</h3>
        <p className="text-gray-600 mb-6">아름다운 변화를 지금 확인하세요!</p>
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full">
          <i className="ri-arrow-right-line text-2xl text-white"></i>
        </div>
      </a>
    </section>
  );
}
