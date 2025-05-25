import { useLanguage } from "@/Contexts/LanguageContext";
import { Pause, Play, X } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../SectionTitle";

const SectionVideo = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Video Thumbnail Section */}
        <div 
          onMouseEnter={()=>setIsHover(true)} 
          onMouseLeave={()=>setIsHover(false)}
          className="relative group overflow-hidden shadow-xl rounded-lg w-full  mx-auto h-[22rem] md:h-[26rem] lg:h-[30rem]]">
            <div className="p-8">
              <video
                src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1745419906/o5wjjvglpclr5dze9cp0.mp4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 "
                preload="metadata"
              />

              {/* Overlay Layer */}
             
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60  to-black/30 z-10 flex flex-col justify-center items-center text-white px-4 transition-all duration-3000 transform
                ${isHover ?  "translate-y-0 opacity-100" : "translate-y-full opacity-0" }`}>
                <p className="text-xl font-semibold mb-4 drop-shadow-md">
                  {t("home.processTitle") || "Quy Trình Làm Bánh"}
                </p>
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-[#EF3F36]  shadow-lg flex items-center justify-center transition-all z-20"
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 text-white  animate-bounce" />
                </button>
               </div>
             
            </div>
        </div>

          {/* Fullscreen Video Modal */}
          {isPlaying && (
            <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
              <div className="relative w-full max-w-5xl aspect-video">
                <video
                  src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1745419906/o5wjjvglpclr5dze9cp0.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 transition"
                  aria-label="Close video"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          )}
          {/* Title + Subtitle */}
          <div className="space-y-6 text-gray-800 mt-4">
            <SectionTitle
              title1={t('home.videoTitle1')}
              title2={t('home.videoTitle2')}
              underline={false}
              lightText={true}
              centered={true}
              subtitle={t('home.videoSubtitle')}
              className="text-banhcuon-700 mb-6 fade-in-up"
            />
            <p className="text-gray-700 text-lg leading-relaxed font-playfair fade-in-up">{t('home.videoDescription')}</p>
          </div>
      </div>
    </section>
  )
}

export default SectionVideo;