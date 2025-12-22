export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-start gap-12">
            <img
              src="/miho/logo_w.svg"
              alt="미호"
              className="h-8"
            />
            <a
              href="https://www.bbgnetworks.com/recruitment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <strong className="whitespace-nowrap">가맹점 모집</strong>
              <i className="ri-arrow-right-s-line text-lg"></i>
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full  flex items-center justify-center transition-opacity"
            >
              <i className="ri-blog-fill text-2xl text-gray-400"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
            >
              <i className="ri-instagram-line text-2xl text-gray-400"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
            >
              <i className="ri-youtube-fill text-2xl text-gray-400"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity"
            >
              <i className="ri-kakao-talk-fill text-2xl text-gray-400"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex gap-4 mb-4 text-sm">
                <a
                  href="/brandAcceptSite.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  사이트이용약관
                </a>
                <span>|</span>
                <a
                  href="/brandAcceptPrivacy.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  개인정보처리방침
                </a>
              </div>

              <address className="not-italic text-sm leading-relaxed opacity-80">
                <span>
                  <strong>상호명:</strong> 미호의원
                </span>
                <span className="ml-4">
                  <strong>대표:</strong> 홍길동
                </span>
                <span className="ml-4">
                  <strong>사업자번호:</strong> 12345
                </span>
                <br />
                <span>
                  <strong>대표번호:</strong> 1661-4842
                </span>
                <span className="ml-4">
                  <strong>진료과목:</strong> 피부과, 성형외과
                </span>
              </address>
            </div>

            <div className="text-sm opacity-80">
              <p>
                COPYRIGHT© <span>{currentYear}</span> MIHO. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
