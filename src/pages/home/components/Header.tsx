import { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  // Combine scrolled state with menu open state for styling
  const isDarkInfo = isScrolled || isMenuOpen;

  const menuItems = [
    {
      title: '미호뷰티그룹',
      submenu: [
        { name: '미호 소개', link: '#' },
        { name: '학술활동', link: '#' },
        { name: '기사·언론홍보', link: '#' },
        { name: '공부하는 미호', link: '#' },
        { name: '스타와 미호', link: '#' },
        { name: '미호 앰버서더', link: '#' },
        { name: '지점안내·오시는길', link: '#' },
      ],
    },
    {
      title: '시술안내',
      submenu: [
        { name: '톡신', link: '#' },
        { name: '필러/스컬트라', link: '#' },
        { name: '윤곽/조각/제로핏 주사', link: '#' },
        { name: '실리프팅', link: '#' },
        { name: '레이저리프팅', link: '#' },
        { name: '여드름/모공', link: '#' },
        { name: '색소', link: '#' },
        { name: '스킨부스터', link: '#' },
        { name: '스킨케어', link: '#' },
        { name: '제모', link: '#' },
        { name: '체형', link: '#' },
        { name: '항노화수액', link: '#' },
      ],
    },
    {
      title: '커뮤니티',
      submenu: [
        { name: '공지사항', link: '#' },
        { name: '미호 영상', link: '#' },
        { name: '미호 웹드라마', link: '#' },
      ],
    },
    {
      title: '이벤트',
      submenu: [
        { name: '전체 이벤트', link: '#' },
        { name: '지점 이벤트', link: '#' },
      ],
    },
    {
      title: '예약하기',
      submenu: [
        { name: '서울', link: '#' },
        { name: '인천·경기', link: '#' },
        { name: '대전·충청', link: '#' },
        { name: '부산 대구 울산 경상', link: '#' },
        { name: '광주·전라', link: '#' },
        { name: '강원', link: '#' },
        { name: '제주', link: '#' },
      ],
    },
    {
      title: '전후사진',
      submenu: [{ name: '전후사진', link: '#' }],
    },
  ];

  const languages = [
    { name: 'Korean', link: '#' },
    { name: 'English', link: '#' },
    { name: 'Japanese', link: '#' },
    { name: 'Chinese', link: '#' },
    { name: 'Vietnamese', link: '#' },
    { name: 'Thai', link: '#' },
    { name: 'Indonesian', link: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkInfo ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="w-full relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <a href="/" className="flex items-center cursor-pointer">
              <img
                src={
                  isDarkInfo
                    ? '/miho/logo.svg'
                    : '/miho/logo_w.svg'
                }
                alt="미호"
                className="h-8"
              />
            </a>

            <nav className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer ${isDarkInfo ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  미호 코스메틱
                </a>
                <a
                  href="#"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer ${isDarkInfo ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  가맹문의
                </a>
                <span
                  className={`whitespace-nowrap ${isDarkInfo ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  대표번호 1661-4842
                </span>
                <div className="relative">
                  <button
                    onClick={() => setShowLangDropdown(!showLangDropdown)}
                    className={`flex items-center gap-1 hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer ${isDarkInfo ? 'text-gray-700' : 'text-white'
                      }`}
                  >
                    <i className="ri-global-line"></i>
                    <span>Language</span>
                    <i className="ri-arrow-down-s-line text-xs"></i>
                  </button>
                  {showLangDropdown && (
                    <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[140px]">
                      {languages.map((lang, index) => (
                        <a
                          key={index}
                          href={lang.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {lang.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>

          <nav
            className={`border-t transition-colors ${isDarkInfo ? 'border-gray-100' : 'border-white/20'}`}
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <ul className="flex items-center justify-center gap-12 py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group h-full flex items-center"
                >
                  <button
                    className={`text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer py-4 ${isDarkInfo ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    <span className="relative">
                      {item.title}
                      <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isDarkInfo ? 'bg-gray-800' : 'bg-white'}`}></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 pb-12 pt-4">
            <div className="flex justify-center gap-12">
              {menuItems.map((item, index) => (
                <div key={index} className="w-auto min-w-[100px] flex flex-col items-center">
                  <ul className="flex flex-col gap-3 text-center">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={sub.link}
                          className="text-sm text-gray-500 hover:text-primary hover:font-medium transition-colors whitespace-nowrap cursor-pointer"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
