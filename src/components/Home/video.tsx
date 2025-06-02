import { Pause, Play, X } from "lucide-react";
import { useState } from "react";

// Mock SectionTitle component for demo
const SectionTitle = ({ title1, title2, subtitle, className, ...props }) => (
  <div className={className}>
    <h2 className="text-3xl font-bold mb-2">{title1} {title2}</h2>
    {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
  </div>
);

// Mock useLanguage hook for demo
const useLanguage = () => ({
  t: (key) => {
    const translations = {
      'home.processTitle': 'Quy Trình Làm Bánh',
      'home.videoTitle1': 'Khám Phá',
      'home.videoTitle2': 'Nghệ Thuật Làm Bánh',
      'home.videoSubtitle': 'Trải nghiệm quy trình sản xuất chuyên nghiệp',
      'home.videoDescription': 'Với hơn 20 năm kinh nghiệm, chúng tôi tự hào mang đến những sản phẩm bánh cuốn chất lượng cao, được chế biến theo quy trình khép kín và đảm bảo vệ sinh an toàn thực phẩm.'
    };
    return translations[key] || key;
  }
});

const SectionVideo = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayVideo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Video Section */}
          <div className="relative order-2 lg:order-1">
            <div 
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="relative group cursor-pointer"
            >
              {/* Main video container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 h-[24rem] md:h-[28rem] lg:h-[32rem] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                
                {/* Video element */}
                <video
                  src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  preload="metadata"
                  muted
                  loop
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Play button overlay */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-500 transform ${
                  isHover ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"
                }`}>
                  
                  {/* Process title */}
                  <div className="text-center mb-8 px-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg">
                      {t("home.processTitle")}
                    </h3>
                    <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Play button */}
                  <button
                    onClick={handlePlayVideo}
                    disabled={isLoading}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-red-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:scale-110 hover:shadow-red-500/25 disabled:opacity-50 group/btn"
                    aria-label="Play video"
                  >
                    {/* Button glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover/btn:opacity-30 blur-xl transition-opacity duration-300"></div>
                    
                    {isLoading ? (
                      <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Play className="h-9 w-9 text-white ml-1 drop-shadow-lg transform transition-transform group-hover/btn:scale-110" />
                    )}
                    
                    {/* Pulse animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                  </button>
                  
                  {/* Hint text */}
                  <p className="mt-6 text-sm text-white/80 font-medium tracking-wide uppercase">
                    Nhấn để xem video
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <SectionTitle
                title1={t('home.videoTitle1')}
                title2={t('home.videoTitle2')}
                subtitle={t('home.videoSubtitle')}
                className="text-left"
              />
              
              {/* Enhanced description */}
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  {t('home.videoDescription')}
                </p>
                
                {/* Feature highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: "🏭", text: "Quy trình khép kín" },
                    { icon: "✨", text: "Chất lượng cao" },
                    { icon: "🛡️", text: "An toàn vệ sinh" },
                    { icon: "⏰", text: "20+ năm kinh nghiệm" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg backdrop-blur-sm border border-gray-100">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
          {/* Modal content */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Video container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
                onEnded={() => setIsPlaying(false)}
              />
              
              {/* Close button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Modal title */}
            <div className="text-center mt-6">
              <h3 className="text-white text-xl font-semibold">{t("home.processTitle")}</h3>
              <p className="text-white/70 text-sm mt-2">Nhấn ESC để đóng</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionVideo;