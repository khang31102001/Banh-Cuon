import React from 'react';
// import { useLanguage, Language } from '../contexts/LanguageContext';
import { Calendar, Briefcase, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import SectionGallery from '@/components/Recruitment/SectionGallery';
import SectionProcess from '@/components/Recruitment/SectionProcess';
import FormRecruitment from '@/components/Recruitment/FormRecruitment';
import SectionBanner from '@/components/SectionBanner';
import { Media } from '@/assets/Media';
import SectionTitle from '@/components/SectionTitle';


const Recruitment: React.FC = () => {
  const { t } = useLanguage();
  

  return (
    <div className="min-h-screen">
     
      <SectionBanner
      title={t('recruitment.title')}
      backgroundImage={Media.banner_Recruitment}
       className="h-[600px]"
      >
          <p className="text-neutral-200 text-lg md:text-xl mt-2 drop-shadow-sm tracking-wide">
            {t('recruitment.subtitle')}
          </p>
      </SectionBanner>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
         
          <SectionTitle
          title3={t('recruitment.joinUs')}
          lightText={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-red-500 flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit1')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-red-500 flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit2')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-red-500 flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit3')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-red-500 flex items-center justify-center mx-auto mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit4')}</h3>
            </div>
          </div>
        </div>

        <SectionGallery />
        <SectionProcess />

        {/* Application Form */}
        <FormRecruitment/>
        {/* <ContactForm/> */}
      </div>
    </div>
  );
};

export default Recruitment;