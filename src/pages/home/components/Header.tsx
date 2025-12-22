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
        { name: '미호 소개', link: '/brandToxnfill.php' },
        { name: '학술활동', link: '/brandAction.php' },
        { name: '기사·언론홍보', link: '/brandNews.php' },
        { name: '공부하는 미호', link: '/brandStudy.php' },
        { name: '스타와 미호', link: '/brandStar.php' },
        { name: '미호 앰버서더', link: '/brandModel.php' },
        { name: '지점안내·오시는길', link: '/brandMap.php?b=T00002' },
      ],
    },
    {
      title: '시술안내',
      submenu: [
        { name: '톡신', link: '/brand/detail.php?c=1238&i=' },
        { name: '필러/스컬트라', link: '/brand/detail.php?c=1241&i=' },
        { name: '윤곽/조각/제로핏 주사', link: '/brand/detail.php?c=1240&i=' },
        { name: '실리프팅', link: '/brand/detail.php?c=2557&i=' },
        { name: '레이저리프팅', link: '/brand/detail.php?c=1242&i=' },
        { name: '여드름/모공', link: '/brand/detail.php?c=1244&i=' },
        { name: '색소', link: '/brand/detail.php?c=1243&i=' },
        { name: '스킨부스터', link: '/brand/detail.php?c=1245&i=' },
        { name: '스킨케어', link: '/brand/detail.php?c=1246&i=' },
        { name: '제모', link: '/brand/detail.php?c=1248&i=' },
        { name: '체형', link: '/brand/detail.php?c=1247&i=' },
        { name: '항노화수액', link: '/brand/detail.php?c=1249&i=' },
      ],
    },
    {
      title: '커뮤니티',
      submenu: [
        { name: '공지사항', link: '/brandNotice.php' },
        { name: '미호 영상', link: '/brandToxVideo.php' },
        { name: '미호 웹드라마', link: '/brandWebDrama.php' },
      ],
    },
    {
      title: '이벤트',
      submenu: [
        { name: '전체 이벤트', link: '/brandEvent.php' },
        { name: '지점 이벤트', link: '/brandEvent1.php' },
      ],
    },
    {
      title: '예약하기',
      submenu: [
        { name: '서울', link: '/brandReservation.php' },
        { name: '인천·경기', link: '/brandReservation.php#region_2' },
        { name: '대전·충청', link: '/brandReservation.php#region_3' },
        { name: '부산 대구 울산 경상', link: '/brandReservation.php#region_4' },
        { name: '광주·전라', link: '/brandReservation.php#region_5' },
        { name: '강원', link: '/brandReservation.php#region_6' },
        { name: '제주', link: '/brandReservation.php#region_7' },
      ],
    },
    {
      title: '전후사진',
      submenu: [{ name: '전후사진', link: '/brandBnA.php' }],
    },
  ];

  const languages = [
    { name: 'Korean', link: 'https://www.toxnfill.com/index.php' },
    { name: 'English', link: 'https://eng.toxnfill.com/' },
    { name: 'Japanese', link: 'https://jp.toxnfill.com/' },
    { name: 'Chinese', link: 'https://cn.toxnfill.com/' },
    { name: 'Vietnamese', link: 'https://vn.toxnfill.com/' },
    { name: 'Thai', link: 'https://th.toxnfill.com/' },
    { name: 'Indonesian', link: 'https://id.toxnfill.com/' },
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
                  href="http://www.bbglab.co.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer ${isDarkInfo ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  미호 코스메틱
                </a>
                <a
                  href="https://www.bbgnetworks.com/recruitment"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="relative group"
                >
                  <button
                    className={`text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer py-4 ${isDarkInfo ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    {item.title}
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
