import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
// import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#E9F5E1] text-[#2E7D32] pt-12 pb-6 shadow-inner rounded-t-3xl">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Info */}
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="inline-block">
            <img src={Media.logo || ""} className="w-48 h-48 object-contain "/>
              {/* <h3 className="font-poppins font-bold text-2xl text-banhcuon-800 dark:text-banhcuon-200">
                Bánh Cuốn <span className="text-cta">Tây Hồ</span>
              </h3> */}
            </Link>
            <p className="text-muted-foreground">
              {t('home.welcomeText').substring(0, 120)}...
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">{t('common.home')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('common.menu')}
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-muted-foreground hover:text-primary selection:transition-colors">
                  {t('common.recruitment')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary  transition-colors">
                  {t('common.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">{t('common.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('contact.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('contact.phone')}</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">{t('contact.hours')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">{t('common.follow')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://website.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://shopeefood.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center text-sm"
              >
                {t('common.orderNow')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-banhcuon-200 dark:border-banhcuon-800 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bánh Cuốn Tây Hồ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;