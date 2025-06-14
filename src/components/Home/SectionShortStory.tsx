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
                            <div className="space-y-4">
                                <div  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                                    <img
                                        src="https://media.baothaibinh.com.vn/upload/news/2_2023/banh_cuon_viet_nam_lot_top_10_mon_an_hap_dan_nhat_the_gioi_08241609022023.jpg"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </div>

                                <div style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                                    <img
                                        src="https://cafefcdn.com/203337114487263232/2023/2/6/photo-12-16756819003051743090099.jpg"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </div>
                            </div>
                            <div className="pt-8">
                                <div style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                                    <img
                                        src="https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/11.2023/241123-banh-cuon-buffet-poseidon-4.jpg"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg  h-auto max-w-full transition-all duration-300 hover:scale-105 animation-element"
                                    />
                                </div>

                                {/* Video thumbnail with play button */}
                                <div className="relative mt-4 rounded-lg overflow-hidden group">
                                    <div style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                                        <img
                                            src="https://cafefcdn.com/203337114487263232/2023/2/6/photo-11-1675681892622756817619.jpg"
                                            alt="Bánh Cuốn Tây Hồ"
                                            className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105 animation-element"
                                        />
                                    </div>
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