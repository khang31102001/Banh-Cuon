import React, { useState } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';
import InfoContact from '@/components/Contact/InfoContact';
import SectionBanner from '@/components/SectionBanner';
import { Media } from '@/assets/Media';
import Map from '@/components/Contact/maptest';

const Contact: React.FC = () => {
  const { t } = useLanguage();
 

  return (
    <div className="min-h-screen">
      
      <SectionBanner
      
      title={t('contact.title')}
      backgroundImage={Media.banner_contact}
      className='h-[600px]'
      >
        <p className="text-neutral-200 text-lg md:text-xl mt-2 drop-shadow-sm tracking-wide">
            {t('contact.subtitle')}
        </p>

      </SectionBanner>

      <div className="container mx-auto px-4 py-12">
        <InfoContact/>
        {/* <SectionMap/> */}
        <Map/>
      </div>
    </div>
  );
};

export default Contact;