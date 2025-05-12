import { useLanguage } from "@/Contexts/LanguageContext";
import { Pause, Play, X } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../SectionTitle";

const SectionVideo = () => {
    const { t } = useLanguage();
 const [isPlaying, setIsPlaying] = useState(false);
    return (
        <section className="container mx-auto py-12 px-4">
            <div className="gird gird-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Video Thumbnail Section */}
                <div className="relative group overflow-hidden shadow-xl rounded-lg w-full  mx-auto h-[22rem] md:h-[26rem] lg:h-[30rem]]">
                  <div className="p-8">
                  <video
                    src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1745419906/o5wjjvglpclr5dze9cp0.mp4"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    playsInline
                    muted
                    preload="metadata"
                  />
          
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10 flex flex-col justify-center items-center text-white px-4">
                
                    <p className="text-xl font-semibold mb-4 drop-shadow-md">
                        {t("home.processTitle") || "Quy Trình Làm Bánh"}
                        </p>
                        <button
                        onClick={() => setIsPlaying(true)}
                        className="w-16 h-16 rounded-full bg-[#EF3F36] hover:bg-[#d12f2f] shadow-lg flex items-center justify-center transition-all z-20"
                        aria-label="Play video"
                        >
                        <Play className="h-8 w-8 text-white animate-pulse" />
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
                        title1="Quy Trình "
                        title2="Làm Bánh"
                        title3="Cuốn"
                        underline={false}
                        lightText={true}
                        centered={true}
                        subtitle="Khám phá quy trình thủ công tỉ mỉ để tạo nên những chiếc bánh cuốn mỏng mịn, đậm đà hương vị truyền thống – một đặc sản nổi tiếng hơn 60 năm của Hà Nội."
                        className="text-banhcuon-700 mb-6 fade-in-up"
                    />
                    <p>
                      Bánh cuốn được làm từ bột gạo xay nhuyễn hoà với nước theo tỉ lệ chuẩn, 
                      sau đó tráng mỏng trên lớp vải căng đặt trên nồi nước sôi. 
                      Lớp bánh mỏng tang vừa chín tới sẽ được nhẹ nhàng lấy ra, 
                      cuốn cùng nhân thịt băm, mộc nhĩ thơm lừng hoặc để chay tuỳ khẩu vị. 
                      Cuối cùng, bánh được rắc thêm hành phi vàng ruộm và thưởng thức cùng nước mắm pha đậm đà.
                    </p>
                </div>
      
              
            </div>
        </section>
    )
}

export default SectionVideo;