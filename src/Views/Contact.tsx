import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/Contexts/LanguageContext';
import SectionMap from '@/components/Contact/SectionMap';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormData);
      
      toast({
        title: 'Message Sent',
        description: 'We will get back to you as soon as possible!',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-banhcuon-100 dark:bg-banhcuon-900 py-16 px-4 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="primary-heading">{t('contact.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="secondary-heading mb-6">{t('common.contact')}</h2>
              
              <div className="space-y-4">
                <div className="contact-info-item">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{t('contact.address')}</span>
                </div>
                <div className="contact-info-item">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{t('contact.phone')}</span>
                </div>
                <div className="contact-info-item">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{t('contact.hours')}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="secondary-heading mb-6">{t('contact.orderOnline')}</h2>
              <div className="flex flex-col items-center">
                <p className="mb-4 text-muted-foreground">{t('contact.scanQR')}</p>
                <div className="bg-white p-2 rounded shadow-md">
                  <img 
                    src="/images/shopeefood-qr.png"
                    alt="ShopeeFood QR Code"
                    className="w-40 h-40"
                  />
                </div>
                <div className="mt-6">
                  <a
                    href="https://shopeefood.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    {t('common.orderNow')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">{t('contact.messageUs')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-3 rounded-md font-medium text-white transition-colors flex justify-center items-center ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-cta hover:bg-cta-hover'
                    }`}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t('contact.send')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
            
           
          </div>
        </div>
        <SectionMap/>
      </div>
    </div>
  );
};

export default Contact;