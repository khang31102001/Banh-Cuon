import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram, Globe, LinkIcon, Linkedin } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { Label } from '@radix-ui/react-context-menu';
// import { useLanguage } from '../contexts/LanguageContext';


const Footer: React.FC = () => {
  const { t } = useLanguage();
  const Links = [
    {
      label:  t('common.about'),
      href: "/about",
      icon: "",
      value: ""
    },
    {
      label:  t('common.menu'),
      href: "/menu",
      icon: "",
      value: ""
    },
    {
      label:  t('common.recruitment'),
      href: "/recruitment",
      icon: "",
      value: ""
    },
    {
      label:  t('common.contact'),
      href: "/contact",
      icon: "",
      value: ""
    }
  ]
  const contactInfo = [
    {
      icon: <MapPin className="mr-2 h-5 w-5 text-red-500" />,
      href: "/contact#map",
      value: t('contact.address'),
    },
    {
      icon: <Phone className="mr-2 h-5 w-5 text-red-500" />,
      href: "tel:02838200584",
      value: "02838200584",
    },
    {
      icon: <Clock className="mr-2 h-5 w-5 text-red-500" />,
      href: "https://maps.app.goo.gl/4EmD2FWB31qbgfbj9",
      value: t('contact.hours'),
    }
  ]
  const socials = [
    {
      icon: <Facebook size={20} className="h-5 w-5 text-red-500" />,
      href: "https://www.facebook.com/banhcuontayho127",
      value: "Facebook",
    },
    {
      icon: <Instagram size={20}  className="h-5 w-5 text-red-500" />,
      href: "https://www.instagram.com/banhcuontayho127/",
      value: "Instagram",
    },
    {
      icon: <Linkedin size={20}  className=" h-5 w-5 text-red-500" />,
      href: "https://www.linkedin.com/company/tayho127",
      value: "LinkedIn",
    }
  ]
  return (
    <footer className="bg-[#FFF8F2] text-black/90 pt-12 pb-6 shadow-inner rounded-t-3xl">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Social Media */}
          <div className="space-y-4 ">
            <div className='flex flex-col justify-center items-center'>
              <h4 className=" font-semibold text-black text-lg">{t('common.follow')}</h4>
              <div className="flex mt-2 space-x-4">
                {socials.map((social, index)=> {
                  return(
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-banhcuon-200 dark:bg-banhcuon-800 text-foreground hover:bg-cta hover:text-primary-foreground transition-colors"
                      aria-label={social.value}
                      key={index}
                  >
                    {social.icon}
                  </a>
                  )
                })}

              </div>
              <div className='mt-2'>
                <img src={Media.logo_svg} className="w-[12rem] h-[6rem] object-contain " />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-black">{t('common.home')}</h4>
            {Links.map((link, index)=> {
              return (
                <ul key={index} className="space-y-2">
                  <li className="">
                    <Link to={link.href} className="text-muted-foreground hover:text-cta transition-colors">
                      {link.label}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className=" font-semibold text-lg text-black">{t('common.contact')}</h4>
            {contactInfo.map((info, index)=>{
              return(
                <ul key={index} className="space-y-2">
                  <li className="flex items-start">
                    {info.icon}
                    <span className="text-muted-foreground">
                      <a href={info.href} className=' cursor-pointer hover:text-cta transition-colors'>
                        {info.value}
                      </a>
                    </span>
                  </li>
                </ul>
              )
            })}
            
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