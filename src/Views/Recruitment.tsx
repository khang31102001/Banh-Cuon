import React from 'react';
// import { useLanguage, Language } from '../contexts/LanguageContext';
import { Calendar, Briefcase, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import SectionGallery from '@/components/Recruitment/SctionGallery';
import SectionProcess from '@/components/Recruitment/SectionProcess';
import FormRecruitment from '@/components/Recruitment/FormRecruitment';


const Recruitment: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="bg-banhcuon-100 dark:bg-banhcuon-900 py-16 px-4 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="primary-heading">{t('recruitment.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t('recruitment.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="secondary-heading text-center mb-10">{t('recruitment.joinUs')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit1')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit2')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('recruitment.benefit3')}</h3>
            </div>
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
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