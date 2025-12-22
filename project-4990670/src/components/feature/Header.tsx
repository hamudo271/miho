import { useState, useEffect } from 'react';

const menuItems = [
  {
    title: 'WHY 셀팅',
    link: '/why-cellting',
    submenu: [
      { title: '뉴에이징 리더 셀팅', link: '/why-cellting/leader' },
      { title: '셀팅 줄기세포 기술력', link: '/why-cellting/technology' }
    ]
  },
  {
    title: 'Inner 뷰티',
    link: '/inner-beauty',
    submenu: [
      { title: '셀팅 줄기세포', link: '/inner-beauty/stemcell', badge: true },
      { title: '줄기세포 정맥주사', link: '/inner-beauty/iv' },
      { title: 'Inner 밸런스 검진 시스템', link: '/inner-beauty/balance' }
    ]
  },
  {
    title: 'EX 뷰티',
    link: '/ex-beauty',
    submenu: [
      { title: '리즈셀 CEO 패키지', link: '/ex-beauty/ceo' },
      { title: '셀트라콜', link: '/ex-beauty/celltracol' },
      { title: '셀아이', link: '/ex-beauty/celleye' },
      { title: '줄기세포 피부주사', link: '/ex-beauty/skin-injection' },
      { title: '셀레이저', link: '/ex-beauty/cellaser' },
      { title: '셀팅 부스터', link: '/ex-beauty/booster' }
    ]
  },
  {
    title: '병원소개',
    link: '/about',
    submenu: [
      { title: '대표원장 스토리', link: '/about/director' },
      { title: '의료진 소개', link: '/about/doctors' },
      { title: '둘러보기', link: '/about/tour' },
      { title: '오시는길', link: '/about/location' }
    ]
  },
  {
    title: '커뮤니티',
    link: '/community',
    submenu: [
      { title: '바로예약', link: '/community/reservation' },
      { title: '포토후기', link: '/community/reviews' },
      { title: '이벤트', link: '/community/events' },
      { title: '셀팅뉴스', link: '/community/news' },
      { title: '시술 후 주의사항', link: '/community/precautions' }
    ]
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1920px] mx-auto">
          {/* Top Bar */}
          <div className={`border-b border-white/10 transition-all ${isScrolled ? 'hidden' : 'block'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-end items-center h-10">
                <div className="flex items-center gap-4 text-xs">
                  <a href="/login" className={`hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    로그인
                  </a>
                  <span className={isScrolled ? 'text-gray-300' : 'text-white/30'}>|</span>
                  <a href="/register" className={`hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    회원가입
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <a href="/" className="flex items-center cursor-pointer">
                <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  CELLTING
                </span>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {menuItems.map((item) => (
                  <div key={item.title} className="relative group">
                    <a
                      href={item.link}
                      className={`text-sm font-medium hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap ${
                        isScrolled ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </a>
                    
                    {/* Dropdown */}
                    {item.submenu && (
                      <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-lg shadow-lg py-3 min-w-[200px]">
                          {item.submenu.map((subitem) => (
                            <a
                              key={subitem.title}
                              href={subitem.link}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                            >
                              {subitem.title}
                              {subitem.badge && (
                                <span className="ml-2 text-xs text-teal-600 font-medium">BEST</span>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Right Menu */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-3">
                  <select className={`text-xs border rounded px-2 py-1 cursor-pointer ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white bg-transparent'}`}>
                    <option value="cheongdam">청담점</option>
                    <option value="suwon">수원점</option>
                  </select>
                  <a href="/en" className={`text-xs hover:text-teal-600 transition-colors cursor-pointer whitespace-nowrap ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    EN
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                  <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                  <span className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-900">MENU</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    <a
                      href={item.link}
                      className="block py-3 text-base font-medium text-gray-900 hover:text-teal-600 cursor-pointer"
                    >
                      {item.title}
                    </a>
                    {item.submenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.title}
                            href={subitem.link}
                            className="block py-2 text-sm text-gray-600 hover:text-teal-600 cursor-pointer"
                          >
                            {subitem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
