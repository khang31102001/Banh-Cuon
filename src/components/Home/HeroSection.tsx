
import { Link } from 'react-router-dom';
// import videoBanner from "@/assets/video/video_banner.mp4";
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/Contexts/LanguageContext';
// import { Media } from '@/assets/Media';

import { Clock, MapPin, Phone } from 'lucide-react';


const HeroSection = () => {
    const { t } = useLanguage();
    const parallaxRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.25; // Set the playback rate to 0.5x
        }

    }, [])

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

    useEffect(() => {

        const title = document.getElementById("banner-title");

        if (!title) return;
        const handleScroll = () => {
            const rect = title.getBoundingClientRect();
            if (rect.top < window.innerHeight - 30) {
                title.classList.add("in-view");
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleOrder = () => {
        const link = "https://shopeefood.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang";

        if (link.startsWith("https://shopeefood.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang")) {
            window.open(link, "_blank", "noopener,noreferrer");
        } else {
            console.log("Liên kết không hợp lệ.");
        }
    }
    return (
        <>
            {/* Hero Section with Parallax and Logo */}
            <section className="hero">
                <div ref={parallaxRef} className="absolute inset-0 overflow-hidden z-0">
                    <video
                        className="w-full h-screen object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1744521126/iwceikwopneotpjhoose.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className="absolute inset-0 bg-black/40" /> */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

                {/* Logo */}
                <div id='banner-title' className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <div className='flex flex-col justify-center items-center text-base  '>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in-up font-roboto leading-tight">
                            <span className=" text-green-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] block mb-2 animate-[fade-in_1s_ease-out] opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                                {t("home.heroTitle")} <span className="text-cta">{t("home.heroBrand")}</span>
                            </span>
                            {/* <span
                                className="text-2xl md:text-3xl lg:text-4xl block font-semibold text-banh-green drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] animate-[fade-in_1s_ease-out] opacity-0"
                                style={{ fontStyle: 'italic', animationDelay: '0.6s', animationFillMode: 'forwards' }}
                            >
                                Gói trọn tinh hoa Việt
                            </span> */}
                            <p
                                className="text-lg md:text-[1.4rem] text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out] opacity-0"
                                style={{ fontStyle: 'italic', animationDelay: '0.9s', animationFillMode: 'forwards' }}
                            >
                                "{t("home.heroSubtitle")}"
                            </p>
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 mt-0 sm:mb-0  fade-in-down">
                            <a
                                
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button  cursor-pointer"
                                onClick={handleOrder}
                            >
                                {t('common.orderNow')}
                            </a>
                            <Link to="/menu" className="px-6 py-3  rounded-md bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all shadow-md">
                                {t('common.viewMenu')}
                            </Link>

                        </div> 
    
                    </div>


                </div>

                {/* Information bar at bottom of hero */}
                <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white py-4">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center sm:justify-items-center">
                            <div className="flex items-center">
                                <Clock className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t("home.heroOpenTime")}</p>
                                    <p className="text-xs text-gray-300">5:30 - 21:30</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t("home.heroAddress")}</p>
                                    <p className="text-xs text-gray-300">{t("home.heroLocation")}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">{t("home.heroOrder")}</p>
                                    <p className="text-xs text-gray-300">+84 28 38200 584</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;