import { useLanguage } from "@/Contexts/LanguageContext";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

interface ContactFormData {
  from_name: string;
  from_email: string;
  message: string;
}

const initialFormData: ContactFormData = {
  from_name: '',
  from_email: '',
  message: '',
};

const FormContact = ()=>{
    const  {t} = useLanguage();
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const serviceId = 'service_k52q99s';
    const templateId = 'template_5g34lzb';
    const userId = 'a3Wq8WGDg50mE54Tg'; //public key
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        emailjs.sendForm(
                    serviceId, // Thay thế bằng service ID của bạn
                    templateId, // Thay thế bằng template ID của bạn
                    form.current, // data
                    userId // Thay thế bằng public key của bạn
                )
                    .then((result) => {
                        console.log('Email sent successfully:', result.text);
                        setIsSubmitting(false);
                        setFormData(initialFormData);
                        toast.success(t('recruitment.successMessage'),{
                            description: `${formData.from_name}, ${t('recruitment.emailSentSuccess')}`,
                        });
                    })
                    .catch((error) => {
                        console.error('Failed to send email:', error.text);
                        setIsSubmitting(false);
        
                        toast.error( t('recruitment.errorMessage'), {
                           description: t('recruitment.emailSentError'),
                        });
                    });
      }, 1500);
    };
    return(
        <div>
        <div className="bg-white dark:bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">{t('contact.messageUs')}</h2>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className=" bg-white w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="bg-white w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
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
                className="bg-white w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={` w-full p-3 rounded-md font-medium text-white transition-colors flex justify-center items-center ${
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
    );
}

export default FormContact;