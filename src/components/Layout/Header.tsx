import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Language, useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { set } from 'date-fns';
// import { Button } from '../ui/button';


const Header: React.FC = () => {
  const { theme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //  console.log(images.logo)
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: t('common.home') },
    { path: '/menu', label: t('common.menu') },
    { path: '/about', label: t('common.about') },
    { path: '/recruitment', label: t('common.recruitment') },
    { path: '/contact', label: t('common.contact') },
  ];

  useEffect(() => {
    const header = document.getElementById("scroll-header");
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (!header) return;
      if (currentScroll > 100) {
        setIsScrolled(true);
        header.classList.add(
          'bg-[#FFF8F2]',
          'shadow-md',
        );
        header.classList.remove('py-4');
      } else {
        setIsScrolled(false)
        header.classList.remove(
          'bg-[#FFF8F2]',
          'shadow-md'
        );
        header.classList.add('py-4');
      }

    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (

    <header id="scroll-header" className="header-custom">

      {/* //    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${ 
    //   mobile
    //     ? 'bg-white shadow-md'
    //     :isScrolled 
    //     ? 'bg-background/95 backdrop-blur-sm shadow-md'
    //     : 'bg-transparent'
    // }`}>   */}


      <div className="container mx-auto px-4 py-4 flex h-16 items-center justify-between">
        <Link
          to="/"
          className="relative overflow-hidden flex items-center justify-center top-auto font-poppins font-bold text-2xl text-banhcuon-600"
        >
          <img
            src={Media.logo_gift}
            alt="Bánh Cuốn Tây Hồ Logo"
            className="w-48  object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-poppins font-medium text-base transition-colors hover:text-primary ${isActive(item.path) ? 'text-cta' : 'text-foreground'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav> */}

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            // <Link
            //   key={item.path}
            //   to={item.path}
            //   className={`group relative font-poppins font-semibold text-base 
            //     ${isActive(item.path) ? 'text-red-500' : 'text-white'} 
            //     transition-colors duration-300 hover:text-red-400`}
            // >
            //   {item.label}
            //   <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-600 transition-all duration-300 group-hover:w-full"></span>
            // </Link>
            // <Link
            //   key={item.path}
            //   to={item.path}
            //   className={`group relative font-poppins font-semibold text-base
            //     ${isActive(item.path) ? 'text-red-600' : 'text-white'}
            //     transition-colors duration-300 hover:text-yellow-400`}
            // >
            //   {item.label}
            //   <span className={`absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300
            //     ${isActive(item.path)
            //       ? 'w-full bg-yellow-400'
            //       : 'bg-gradient-to-r from-yellow-300 to-yellow-500 group-hover:w-full'}
            //   `}></span>
            // </Link>
            <Link
              key={item.path}
              to={item.path}
              className={`group relative font-playfair font-semibold text-base 
                          transition-colors duration-300
                          ${isActive(item.path) ? 'text-cta' : isScrolled ? ' text-black hover:text-cta ' : 'text-white hover:text-[#F44336]'}
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
              🇻🇳
            </button>
            <button
              className={`language-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              🇬🇧
            </button>
            <button
              className={`language-option ${language === 'jp' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('jp')}
            >
              🇯🇵
            </button>
          </div>

          <button
            // onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-accent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen && (<Menu size={24} className="text-grey-600 drop-shadow-md" />)}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 bg-background/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? ' translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="font-poppins font-bold text-2xl text-banhcuon-800"
                onClick={() => setIsMenuOpen(false)}>
                Bánh Cuốn <span className="text-cta ml-1 ">Tây Hồ</span>
              </Link>
              <button
                className="p-2 rounded-md hover:bg-accent"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mb-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins text-xl transition-colors hover:text-primary ${isActive(item.path) ? 'text-cta' : 'text-foreground'
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
                    🇻🇳
                  </button>
                  <button
                    className={`language-option ${language === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    🇬🇧
                  </button>
                  <button
                    className={`language-option ${language === 'jp' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('jp')}
                  >
                    🇯🇵
                  </button>
                </div>

                <button
                  //   onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                  aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
