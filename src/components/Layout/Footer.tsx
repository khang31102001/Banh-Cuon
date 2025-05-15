import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
// import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#FFF8F2] text-black/90 pt-12 pb-6 shadow-inner rounded-t-3xl">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Social Media */}
          <div className="space-y-4 ">
            <div className='flex flex-col justify-center items-center'>
              <h4 className="font-poppins font-semibold text-lg">{t('common.follow')}</h4>
              <div className="flex mt-2 space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-cta hover:text-primary-foreground transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-cta hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://website.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-cta hover:text-primary-foreground transition-colors"
                  aria-label="Website"
                >
                  <Globe size={20} />
                </a>

              </div>
              <div className='mt-2'>
                <img src={Media.logo_svg} className="w-[12rem] h-[6rem] object-contain " />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg">{t('common.home')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-cta transition-colors">
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-cta transition-colors">
                  {t('common.menu')}
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-muted-foreground hover:text-cta selection:transition-colors">
                  {t('common.recruitment')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-cta  transition-colors">
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
                <MapPin className="mr-2 h-5 w-5 text-cta" />
                <span className="text-muted-foreground">
                  <a href="/contact#map" className=' cursor-pointer hover:text-cta transition-colors'>
                    {t('contact.address')}
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-cta" />
                <span className="relative text-muted-foreground">
                  <a href="tel:02838200584" className="cursor-pointer hover:text-cta transition-colors ">
                    02838200584
                  </a>
                 
                </span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-cta" />
                <span className="text-muted-foreground">
                  <a href="https://maps.app.goo.gl/4EmD2FWB31qbgfbj9" className="cursor-pointer hover:text-cta transition-colors">
                    {t('contact.hours')}
                  </a>
                  </span>
              </li>
            </ul>
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