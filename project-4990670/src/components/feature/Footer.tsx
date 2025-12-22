export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-900 via-rose-800 to-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Contact Title */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-3xl lg:text-4xl mb-4">Contact</h3>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-9 grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Phone */}
            <div>
              <p className="text-sm text-white/80 mb-3">상담문의</p>
              <a
                href="tel:1555-1527"
                className="text-3xl lg:text-4xl font-bold hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                1555-1527
              </a>
            </div>

            {/* Hours */}
            <div>
              <p className="text-sm text-white/80 mb-3">진료시간</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>월 ~ 목</span>
                  <span>10:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>금요일</span>
                  <div className="flex items-center gap-2">
                    <span>10:00 - 21:00</span>
                    <span className="bg-teal-600 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap">야간진료</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>토요일</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <span className="font-medium">일요일, 공휴일</span> 휴무
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12 pb-12 border-b border-white/20">
          {/* Address */}
          <div>
            <p className="text-sm text-white/80 mb-3">오시는 길</p>
            <a
              href="https://naver.me/5gFMCRJs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:text-teal-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              서울특별시 강남구 선릉로 803, 지상 6층-7층(신사동, 메타타워)
              <i className="ri-external-link-line"></i>
            </a>
            
            {/* Map Links */}
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://naver.me/5gFMCRJs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                네이버맵
              </a>
              <a
                href="https://kko.kakao.com/tzN0qEqmX9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                카카오맵
              </a>
              <a
                href="https://shorturl.at/4pVjS"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                구글맵
              </a>
            </div>
          </div>

          {/* Map Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://cellting.com/theme/cellting/images/cellting_location_kr_500x260_cheongdam.png"
              alt="셀팅 약도"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="space-y-4">
          {/* Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/policy/privacy" className="hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap">
              개인정보처리방침
            </a>
            <span className="text-white/30">|</span>
            <a href="/policy/terms" className="hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap">
              이용약관
            </a>
            <span className="text-white/30">|</span>
            <a href="/policy/email" className="hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap">
              이메일 무단수집거부
            </a>
            <span className="text-white/30">|</span>
            <a href="/policy/fees" className="hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap">
              비급여 진료수가
            </a>
            <span className="text-white/30">|</span>
            <a href="/about" className="hover:text-teal-300 transition-colors cursor-pointer whitespace-nowrap">
              병원소개
            </a>
          </div>

          {/* Company Info */}
          <div className="text-sm text-white/70 space-y-1">
            <p>
              <span>사업자등록번호 : 855-15-02417</span>
              <span className="mx-2">|</span>
              <span>대표자명 : 윤상아</span>
              <span className="mx-2">|</span>
              <span>개인정보보호책임자 : 윤상아</span>
            </p>
            <p className="text-xs">
              © 2024, CELLTING.COM. © COPYRIGHT. All rights reserved.
            </p>
          </div>

          {/* SNS */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://pf.kakao.com/_NxmpGn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-kakao-talk-fill text-xl"></i>
            </a>
            <a
              href="https://blog.naver.com/celltingcd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <i className="ri-blogger-line text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
