import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Language, useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import ReactCountryFlag from "react-country-flag";
import { preloadAbout, preloadContact, preloadHome, preloadMenu, preloadRecruitment } from '@/Routers';
// import { Button } from '../ui/button';


const Header: React.FC = () => {
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const [isScrolled, setIsScrolled] = useState(false);

  //  console.log(images.logo)
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: t('common.home'), preload: preloadHome },
    { path: '/menu', label: t('common.menu'), preload: preloadMenu },
    { path: '/about', label: t('common.about'), preload: preloadAbout },
    { path: '/recruitment', label: t('common.recruitment'), preload: preloadRecruitment},
    { path: '/contact', label: t('common.contact'), preload: preloadContact },
  ];

  useEffect(() => {
    const header = document.getElementById("scroll-header");
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!header) return;
      if (currentScroll > 100) {
        setIsScrolled(true);
        header.classList.add(
          'bg-[#FFF8F2]'
        );

      } else {
        setIsScrolled(false)
        header.classList.remove(
          'bg-[#FFF8F2]'
        );
       
      }

    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (

    <header id="scroll-header" className="header-custom shadow-sm">
      <div className="container mx-auto px-4 py-4 flex h-16 items-center justify-between gap-8">
        <Link
          to="/"
          className="relative overflow-hidden flex items-center justify-center top-auto font-anton font-bold text-2xl text-banhcuon-600"
        >
          <img
            src={Media.logo_gift}
            alt="Bánh Cuốn Tây Hồ Logo"
            className={`w-48  object-cover transition-all duration-3000 ease-in-out ${isScrolled ? " scale-75": "scale-100"}`}
          />
        </Link>

        {/* Desktop Navigation */}
      
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (

            <Link
              key={item.path}
              to={item.path}
              onMouseEnter={item.preload}
              className={`group relative font-anton font-semibold text-base 
                          transition-colors duration-300
                          ${isActive(item.path) ? 'text-cta' : isScrolled ? ' text-green-900 hover:text-cta ' : 'text-white hover:text-[#F44336]'}
                        `}
            >
              {item.label}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 bg-gradient-to-r from-tay-ho-sunflower to-banh-primary-dark group-hover:w-full"
              ></span>
            </Link>
          ))}
        </nav>


        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="language-switcher">
            <button
              className={`language-option ${language === 'vi' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('vi')}
            >
             <div className="flex items-center justify-center">
                <ReactCountryFlag countryCode="VN" svg style={{ width: "1.5em", height: "1.5em", margin: "auto" }} />
             </div>
            </button>
            <button
              className={`language-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              <div className="flex items-center justify-center">
                <ReactCountryFlag countryCode="GB" svg style={{ width: "1.5em", height: "1.5em" }} />
              </div>
            </button>
            <button
              className={`language-option ${language === 'jp' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('jp')}
            >
              <div className="flex items-center justify-center">
                <ReactCountryFlag countryCode="JP" svg style={{ width: "1.5em", height: "1.5em" }} />
              </div>
            </button>
          </div>

          {/* <button
             onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
                className="md:hidden flex flex-col justify-center items-center text-green-900 space-y-1.5 z-50"
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
                aria-label="open menu"
              >
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 right-0 h-full bg-[#FFF8F2] shadow-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" :  "-translate-y-full"
          } flex flex-col  items-start opacity-100`}
        >
         <div className="block w-full p-4">
            <Link to="/" className="font-anton font-bold text-2xl text-banh-green"
                    onClick={() => setIsMenuOpen(false)}>
                    Bánh Cuốn <span className="text-cta ml-1 ">Tây Hồ</span>
            </Link>
         </div>
          <div className="flex flex-col h-full p-6">
            <nav className="flex flex-col space-y-6 mb-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onMouseEnter={item.preload}
                  className={`font-anton text-xl transition-colors hover:text-primary ${isActive(item.path) ? 'text-cta' : 'text-green-900'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="language-switcher">
                  <button
                    className={`language-option ${language === 'vi' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('vi')}
                  >
                    <div className="flex items-center justify-center">
                        <ReactCountryFlag countryCode="VN" svg style={{ width: "1.5em", height: "1.5em", margin: "auto" }} />
                    </div>
                  </button>
                  <button
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <div className="flex items-center justify-center">
                      <ReactCountryFlag countryCode="GB" svg style={{ width: "1.5em", height: "1.5em" }} />
                    </div>
                  </button>
                  <button
                    className={`language-option ${language === 'jp' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('jp')}
                  >
                    <div className="flex items-center justify-center">
                      <ReactCountryFlag countryCode="JP" svg style={{ width: "1.5em", height: "1.5em" }} />
                     </div>
                  </button>
                </div>

                {/* <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
