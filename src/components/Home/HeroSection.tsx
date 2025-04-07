
import { Link } from 'react-router-dom';
// import videoBanner from "@/assets/video/video_banner.mp4";
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { Clock, MapPin, Phone } from 'lucide-react';


const HeroSection = () => {
    const { t } = useLanguage();
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;

            const scrollPosition = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {/* Hero Section with Parallax and Logo */}
            <div className="hero">
                <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
                    <video
                        src={Media.vedieo_header_home}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-up">
                        {t('home.heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                        <a
                            href="https://shopeefood.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                        >
                            {t('common.orderNow')}
                        </a>
                        <Link to="/menu" className="px-6 py-3 rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all shadow-md">
                            {t('common.viewMenu')}
                        </Link>

                    </div>

                </div>
                {/* Information bar at bottom of hero */}
                <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white py-4">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="flex items-center">
                                <Clock className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Mở cửa hàng ngày</p>
                                    <p className="text-xs text-gray-300">7:00 - 22:00</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Địa chỉ chính</p>
                                    <p className="text-xs text-gray-300">123 Đường Lê Lợi, Quận 1, TP. HCM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Đặt bàn</p>
                                    <p className="text-xs text-gray-300">+84 28 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;