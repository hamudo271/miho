export default function SnsSection() {
  return (
    <section className="py-20 bg-gray-50" id="sns-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">BRAND CONTENTS</h3>
          <p className="text-lg text-gray-700">미호 커뮤니티</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <a
            href="#"
            className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <i className="ri-youtube-fill text-6xl text-gray-400"></i>
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex flex-col items-center justify-center">
              <i className="ri-youtube-line text-6xl text-white mb-4"></i>
              <p className="text-white text-2xl font-bold">YOUTUBE</p>
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-[16/10] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <i className="ri-instagram-fill text-6xl text-gray-400"></i>
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex flex-col items-center justify-center">
              <i className="ri-instagram-line text-6xl text-white mb-4"></i>
              <p className="text-white text-2xl font-bold">INSTAGRAM</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
