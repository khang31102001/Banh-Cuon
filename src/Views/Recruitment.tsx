import React, { useState } from 'react';
// import { useLanguage, Language } from '../contexts/LanguageContext';
import { Check, Calendar, Briefcase, Users, BookOpen } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import jobPositions from '@/data/jobPositions';
import { Language, useLanguage } from '@/Contexts/LanguageContext';
import SectionGallery from '@/components/Recruitment/SctionGallery';
import SectionProcess from '@/components/Recruitment/SectionProcess';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  position?: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  message: '',
};

const Recruitment: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formProgress, setFormProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = t('recruitment.requiredField');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('recruitment.requiredField');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('recruitment.requiredField');
      isValid = false;
    }

    if (!formData.position) {
      newErrors.position = t('recruitment.requiredField');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const calculateProgress = (): void => {
    const requiredFields = ['fullName', 'email', 'phone', 'position'];
    const filledFields = requiredFields.filter(field => !!formData[field as keyof FormData]);
    const progress = Math.floor((filledFields.length / requiredFields.length) * 100);
    setFormProgress(progress);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Update progress
    setTimeout(calculateProgress, 100);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormData);
      setFormProgress(0);
      
      toast({
        title: t('recruitment.successMessage'),
        description: `${formData.fullName}, we'll contact you soon!`,
      });
    }, 1500);
  };

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

       <SectionGallery/>
       <SectionProcess/>

        {/* Application Form */}
        <div id="application-form" className="max-w-2xl mx-auto bg-white dark:bg-card p-8 rounded-lg shadow-lg animate-slide-up">
          <h2 className="text-2xl font-semibold mb-6">{t('recruitment.applyForm')}</h2>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div 
                className="h-2 bg-primary rounded-full transition-all duration-500"
                style={{ width: `${formProgress}%` }}
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-1">
                {t('recruitment.fullName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
                  errors.fullName ? 'border-red-500' : 'border-input'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  {t('recruitment.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
                    errors.email ? 'border-red-500' : 'border-input'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  {t('recruitment.phone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
                    errors.phone ? 'border-red-500' : 'border-input'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-1">
                {t('recruitment.position')} <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
                  errors.position ? 'border-red-500' : 'border-input'
                }`}
              >
                <option value="">{t('recruitment.position')}</option>
                {jobPositions.map((job) => (
                  <option key={job.id} value={job.title[language as Language]}>
                    {job.title[language as Language]}
                  </option>
                ))}
              </select>
              {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position}</p>}
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-1">
                {t('recruitment.experience')}
              </label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                {t('recruitment.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-3 rounded-md font-medium text-white transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-cta hover:bg-cta-hover'
                }`}
              >
                {isSubmitting ? '...' : t('recruitment.submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;