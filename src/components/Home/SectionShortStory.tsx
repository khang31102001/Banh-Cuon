import { Media } from '@/assets/Media';
import { useLanguage } from '@/Contexts/LanguageContext';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
const SectionShortStory = () => {
    const { t } = useLanguage();

    return (
        <div>
            {/* Welcome Section with Video */}
            <section className="section-padding ">
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

                            <div className='"mt-8'>
                                <p className="text-gray-700 text-lg leading-[3] font-anton fade-in-up">
                                    {t('home.storyFirst')} <strong className="text-banh-green">1972</strong>, {t("home.heroTitle")} <strong className="text-[#EF3F36]"> {t("home.heroBrand")}</strong> {t('home.storySecond')} <span className="italic">{t('home.storyThird')}</span>.
                                </p>

                                <p className="text-gray-700 text-lg leading-[3] font-anton fade-in-up">
                                    {t('home.storyFour')} <strong className="text-banh-green">60 {t('common.year')}</strong>, {t('home.storyFive')} <strong>Hà Nội</strong>.
                                    {t('home.storySix')} <span className="font-medium text-[#4A2F17]">{t('home.storySeven')}</span>.
                                </p>
                            </div>
                            <div className="pt-4">
                                <Link
                                    to="/menu"
                                    className="inline-flex items-center justify-center px-5 py-2 rounded-full 
                                        text-white bg-[#44e844] hover:bg-[#369b36] 
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
                            <div className="space-y-4">
                                <span style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                                    <img
                                        src={Media.banhcuon1}
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </span>

                                <span style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                                    <img
                                        src={Media.banhcuon2}
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </span>
                            </div>
                            <div className="pt-8">
                                <span style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                                    <img
                                        src={Media.banhcuon3}
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg  h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </span>

                                {/* Video thumbnail with play button */}
                                <div className="relative mt-4 rounded-lg overflow-hidden group">
                                    <span style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                                        <img
                                            src={Media.banhcuon4}
                                            alt="Bánh Cuốn Tây Hồ"
                                            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105 animation-element"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionShortStory;