import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Language, useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { Button } from '../ui/button';


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
    { path: '/recruitment', label: t('common.recruitment') },
    { path: '/contact', label: t('common.contact') },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* <Link
          to="/"
          className="flex items-center justify-center font-poppins font-bold text-2xl text-banhcuon-800"
        >
          <div className="  w-20 h-20 p-1 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg  ">
            <img
              src={Media.logo}
              alt="Bánh Cuốn Tây Hồ Logo"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </Link> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
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
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="font-poppins font-bold text-2xl text-banhcuon-800 " 
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
