
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
            <div className="hero">
                <div ref={parallaxRef} className="absolute inset-0 overflow-hidden">
                    <video
                        src=""
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-on-scroll font-serif leading-tight">
                        <span className="block mb-2 animate-[fade-in_1s_ease-out] opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Bánh Cuốn Tây Hồ
                        </span>
                        <span className="text-2xl md:text-3xl lg:text-4xl block text-banhcuon-300 animate-[fade-in_1s_ease-out] opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Hương vị truyền thống, cảm nhận hiện đại
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-[fade-in_1s_ease-out] opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                        Tinh hoa ẩm thực Việt Nam làm từ những nguyên liệu tươi ngon nhất, mang đến trải nghiệm ẩm thực đích thực.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                        <a
                            href="https://shopeefood.vn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                            onClick={handleOrder}
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
                                    <p className="text-xs text-gray-300">5:30 - 21:30</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Địa chỉ chính</p>
                                    <p className="text-xs text-gray-300">127 Đinh Tên Hoàng - Đa Kao, Quận 1, TP. HCM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="text-restaurant-secondary mr-2 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium">Đặt bàn</p>
                                    <p className="text-xs text-gray-300">+84 28 38200 584</p>
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