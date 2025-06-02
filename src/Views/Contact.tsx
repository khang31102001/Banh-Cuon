import React, { useState } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';
import SectionMap from '@/components/Contact/SectionMap';
import InfoContact from '@/components/Contact/InfoContact';
import SectionBanner from '@/components/SectionBanner';
import { Media } from '@/assets/Media';
import Map from '@/components/Contact/maptest';

const Contact: React.FC = () => {
  const { t } = useLanguage();
 

  return (
    <div className="min-h-screen">
      {/* <div className="bg-banhcuon-100 dark:bg-banhcuon-900 py-16 px-4 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="primary-heading">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </div> */}
      <SectionBanner
      title={t('contact.title')}
      backgroundImage={Media.banner_contact}
      className=''
      >
        <p className="text-neutral-200 text-lg md:text-xl mt-2 drop-shadow-sm tracking-wide">
            {t('contact.subtitle')}
        </p>

      </SectionBanner>

      <div className="container mx-auto px-4 py-12">
        <InfoContact/>
        <SectionMap/>
        {/* <Map/> */}
      </div>
    </div>
  );
};

export default Contact;