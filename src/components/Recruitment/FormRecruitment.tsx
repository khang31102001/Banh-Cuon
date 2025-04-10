// import { useToast } from "@/hooks/use-toast";
// import { useState, useRef } from "react";
// // import emailjs from '@emailjs/browser';
// import { useLanguage, Language } from '@/Contexts/LanguageContext';

// interface FormData {
//   fullName: string;
//   email: string;
//   phone: string;
//   position: string;
//   experience: string;
//   message: string;
// }

// interface FormErrors {
//   fullName?: string;
//   email?: string;
//   phone?: string;
//   position?: string;
// }

// const initialFormData: FormData = {
//   fullName: '',
//   email: '',
//   phone: '',
//   position: '',
//   experience: '',
//   message: '',
// };

// // Giả sử các vị trí công việc được định nghĩa như sau
// const jobPositions = [
//   {
//     id: 1,
//     title: {
//       vi: 'Đầu bếp',
//       en: 'Chef',
//       jp: 'シェフ',
//     },
//   },
//   {
//     id: 2,
//     title: {
//       vi: 'Phục vụ',
//       en: 'Waiter/Waitress',
//       jp: 'ウェイター/ウェイトレス',
//     },
//   },
//   {
//     id: 3,
//     title: {
//       vi: 'Thu ngân',
//       en: 'Cashier',
//       jp: 'キャッシャー',
//     },
//   },
//   // Thêm các vị trí khác nếu cần
// ];

// const FormRecruitment = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>(initialFormData);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [formProgress, setFormProgress] = useState(0);
//   const { toast } = useToast();
//   const { language, t } = useLanguage();
//   const form = useRef<HTMLFormElement>(null);

//   // Tính toán tiến trình điền form
//   const calculateProgress = () => {
//     const fields = ['fullName', 'email', 'phone', 'position'];
//     const filledFields = fields.filter(field => formData[field as keyof FormData]?.trim()).length;
//     const progress = Math.round((filledFields / fields.length) * 100);
//     setFormProgress(progress);
//   };

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {};
//     let isValid = true;

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = t('recruitment.requiredField');
//       isValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = t('recruitment.requiredField');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email format';
//       isValid = false;
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = t('recruitment.requiredField');
//       isValid = false;
//     }

//     if (!formData.position) {
//       newErrors.position = t('recruitment.requiredField');
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear error when user types
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }));
//     }
    
//     // Update progress
//     setTimeout(calculateProgress, 100);
//   };

//   const handleSubmit = (e: React.FormEvent): void => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Sử dụng EmailJS để gửi form
//     emailjs.sendForm(
//       'YOUR_SERVICE_ID', // Thay thế bằng service ID của bạn
//       'YOUR_TEMPLATE_ID', // Thay thế bằng template ID của bạn
//       form.current!,
//       'YOUR_PUBLIC_KEY' // Thay thế bằng public key của bạn
//     )
//       .then((result) => {
//         console.log('Email sent successfully:', result.text);
//         setIsSubmitting(false);
//         setFormData(initialFormData);
//         setFormProgress(0);
        
//         toast({
//           title: t('recruitment.successMessage'),
//           description: `${formData.fullName}, ${t('recruitment.emailSentSuccess')}`,
//         });
//       })
//       .catch((error) => {
//         console.error('Failed to send email:', error.text);
//         setIsSubmitting(false);
        
//         toast({
//           title: t('recruitment.errorMessage'),
//           description: t('recruitment.emailSentError'),
//           variant: 'destructive',
//         });
//       });
//   };

//   return(
//     <div>
//       <form ref={form} onSubmit={handleSubmit} className="space-y-4">
//         {/* Progress bar */}
//         <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 dark:bg-gray-700">
//           <div 
//             className="bg-cta h-2.5 rounded-full transition-all duration-300" 
//             style={{ width: `${formProgress}%` }}
//           ></div>
//         </div>

//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium mb-1">
//             {t('recruitment.fullName')} <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
//               errors.fullName ? 'border-red-500' : 'border-input'
//             }`}
//           />
//           {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               {t('recruitment.email')} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
//                 errors.email ? 'border-red-500' : 'border-input'
//               }`}
//             />
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>
          
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium mb-1">
//               {t('recruitment.phone')} <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
//                 errors.phone ? 'border-red-500' : 'border-input'
//               }`}
//             />
//             {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
//           </div>
//         </div>
        
//         <div>
//           <label htmlFor="position" className="block text-sm font-medium mb-1">
//             {t('recruitment.position')} <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="position"
//             name="position"
//             value={formData.position}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-md dark:bg-banhcuon-800 ${
//               errors.position ? 'border-red-500' : 'border-input'
//             }`}
//           >
//             <option value="">{t('recruitment.selectPosition')}</option>
//             {jobPositions.map((job) => (
//               <option key={job.id} value={job.title[language as Language]}>
//                 {job.title[language as Language]}
//               </option>
//             ))}
//           </select>
//           {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position}</p>}
//         </div>
        
//         <div>
//           <label htmlFor="experience" className="block text-sm font-medium mb-1">
//             {t('recruitment.experience')}
//           </label>
//           <input
//             type="text"
//             id="experience"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium mb-1">
//             {t('recruitment.message')}
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             rows={4}
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
//           ></textarea>
//         </div>
        
//         <div className="pt-4">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className={`w-full p-3 rounded-md font-medium text-white transition-colors ${
//               isSubmitting
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-cta hover:bg-cta-hover'
//             }`}
//           >
//             {isSubmitting ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 {t('common.processing')}
//               </span>
//             ) : t('recruitment.submit')}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormRecruitment;