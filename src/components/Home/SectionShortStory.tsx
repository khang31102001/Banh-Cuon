import { Media } from '@/assets/Media';
import { useLanguage } from '@/Contexts/LanguageContext';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
interface Props {
    backgroundImage?: string
}
const SectionShortStory = ({ backgroundImage }: Props) => {
    const { t } = useLanguage();
    const dataImage = [
        { id: 1, link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182616/495931800_122117227058885814_5247926027598007430_n_rokwyb.jpg", alt: "127", delay: "0.6s" },
        { id: 2, link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182616/502914208_122109966686885814_2202988423279901795_n_vgitrt.jpg", alt: "127", delay: "0.9s" },
        { id: 3, link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182616/503651616_122112142712885814_7973374300325574410_n_p4f6xn.jpg", alt: "127", delay: "1.2s" },
        { id: 4, link: "https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182616/508567508_122116907690885814_2139524196097943206_n_fdlkyt.jpg", alt: "127", delay: "1.5s" }
    ]
    return (
        <section className="section-padding bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Welcome Section with Video */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 py-12 text-gray-800">
                        <SectionTitle
                            title1={t("home.heroTitle")}
                            title2={t("home.heroBrand")}
                            lightText={true}
                            centered={false}
                            className="mb-6 fade-in-left text-3xl font-anton font-extrabold text-[#4A2F17]"
                        />

                        <div className='"mt-8 font-math leading-2 space-y-4'>
                            <p className="text-gray-700 text-lg fade-in-up">
                                {t('home.storyFirst')} <strong className="text-green-800">1972</strong>, {t("home.heroTitle")} <strong className="text-red-800"> {t("home.heroBrand")}</strong> {t('home.storySecond')} <span className="italic">{t('home.storyThird')}</span>.
                            </p>

                            <p className="text-gray-700 text-lg fade-in-up">
                                {t('home.storyFour')} <strong className="text-green-800">60 {t('common.year')}</strong>, {t('home.storyFive')} <strong>Hà Nội</strong>.
                                {t('home.storySix')} <span className="font-medium text-[#4A2F17]">{t('home.storySeven')}</span>.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Link
                                to="/menu"
                                className="inline-flex items-center justify-center px-5 py-2 rounded-full 
                                        text-white bg-green-800 hover:bg-green-800 
                                        shadow-md transition-all duration-300 group
                                        bg-gradient-to-r from-banh-green to-banh-green 
                                        bg-[length:0%_100%] bg-left hover:bg-[length:100%_100%] hover:text-white 
                                        bg-no-repeat"
                            >
                                <span className="font-anton font-semibold tracking-wide">
                                    {t('common.viewMenu') || 'Xem Thực Đơn'}
                                </span>
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>

                    {/* Image Section */}
                    <div className="grid grid-cols-2 gap-4 relative order-1 md:order-2 animate-on-scroll">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            {dataImage.slice(0, 2).map((item, index) => (
                                <div key={index} style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}>
                                    <img
                                        src={item.link}
                                        alt={`Bánh Cuốn Tây Hồ ${item.alt}`}
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="pt-8 space-y-4">
                            {dataImage.slice(2).map((item, index) => (
                                <div
                                    key={index + 2}
                                    style={{ animationDelay: item.delay, animationFillMode: 'forwards' }}
                                    className={`relative ${index === 1 ? 'group overflow-hidden' : ''}`}
                                >
                                    <img
                                        src={item.link}
                                        alt={`Bánh Cuốn Tây Hồ ${item.alt}`}
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SectionShortStory;