import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useLanguage, Language } from '@/Contexts/LanguageContext';
import { toast } from "sonner";

interface FormData {
    from_name: string;
    from_email: string;
    phone: string;
    position: string;
    experience: string;
    message: string;
}

interface FormErrors {
    from_name?: string;
    from_email?: string;
    phone?: string;
    position?: string;
}

const initialFormData: FormData = {
    from_name: '',
    from_email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
};

// Giả sử các vị trí công việc được định nghĩa như sau
const jobPositions = [
    {
        id: 1,
        title: {
            vi: 'Đầu bếp',
            en: 'Chef',
            jp: 'シェフ',
        },
    },
    {
        id: 2,
        title: {
            vi: 'Phục vụ',
            en: 'Waiter/Waitress',
            jp: 'ウェイター/ウェイトレス',
        },
    },
    {
        id: 3,
        title: {
            vi: 'Thu ngân',
            en: 'Cashier',
            jp: 'キャッシャー',
        },
    },
    // Thêm các vị trí khác nếu cần
];

const FormRecruitment = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formProgress, setFormProgress] = useState(0);
    const serviceId = 'service_k52q99s';
    const templateId = 'template_5g34lzb';
    const userId = 'a3Wq8WGDg50mE54Tg'; //public key
    const { language, t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);

    // Tính toán tiến trình điền form   
    const calculateProgress = () => {
        const fields = ['from_name', 'from_email', 'phone', 'position'];
        const filledFields = fields.filter(field => formData[field as keyof FormData]?.trim()).length;
        const progress = Math.round((filledFields / fields.length) * 100);
        setFormProgress(progress);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.from_name.trim()) {
            newErrors.from_name = t('recruitment.requiredField');
            isValid = false;
        }

        if (!formData.from_email.trim()) {
            newErrors.from_email = t('recruitment.requiredField');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
            newErrors.from_email = 'Invalid email format';
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
        console.log("khang test send mail", form.current);
        // Sử dụng EmailJS để gửi form
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
                setFormProgress(0);

                toast.success(t('recruitment.successMessage'), {
                    description: `${formData.from_name}, ${t('recruitment.emailSentSuccess')}`,
                  });
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                setIsSubmitting(false);
                toast.error(t('recruitment.errorMessage'),{ description: t('recruitment.emailSentError'),});
            });
    };

    return (
        <section className="py-8">
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

                <form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-wgit">
                    <div>
                            <input type="hidden" name="subject" value={`Ứng tuyển - ${formData.position}`} />
                            <input type="hidden" name="current_time" value={new Date().toLocaleString()} />
                            <input type="hidden" name="company" value="Bánh Cuốn TayHo127" />
                    </div>
                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium mb-1">
                            {t('recruitment.name')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            className={`bg-white w-full p-3 border rounded-md dark:bg-banhcuon-800 ${errors.from_name ? 'border-red-500' : 'border-input'
                                }`}
                        />
                        {errors.from_name && <p className="mt-1 text-sm text-red-500">{errors.from_name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="from_email" className="block text-sm font-medium mb-1">
                                {t('recruitment.email')} <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                value={formData.from_email}
                                onChange={handleChange}
                                className={`bg-white w-full p-3 border rounded-md dark:bg-banhcuon-800 ${errors.from_email ? 'border-red-500' : 'border-input'
                                    }`}
                            />
                            {errors.from_email && <p className="mt-1 text-sm text-red-500">{errors.from_email}</p>}
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
                                className={`bg-white w-full p-3 border rounded-md dark:bg-banhcuon-800 ${errors.phone ? 'border-red-500' : 'border-input'
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
                            className={`bg-white w-full p-3 border rounded-md dark:bg-banhcuon-800 ${errors.position ? 'border-red-500' : 'border-input'
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
                            className="bg-white w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
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
                            className="bg-white w-full p-3 border border-input rounded-md dark:bg-banhcuon-800"
                        ></textarea>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full p-3 rounded-md font-medium text-white transition-colors ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-cta hover:bg-cta-hover'
                                }`}
                        >
                            {isSubmitting ? '...' : t('recruitment.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormRecruitment;



