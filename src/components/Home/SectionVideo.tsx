import { Media } from '@/assets/Media';
import { useLanguage } from '@/Contexts/LanguageContext';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
const SectionVideo = () => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // const toggleVideo = () => {
    //     if (videoRef.current) {
    //         if (isPlaying) {
    //             videoRef.current.pause();
    //         } else {
    //             videoRef.current.play();
    //         }
    //         setIsPlaying(!isPlaying);
    //     }
    // };

    const toggleVideo = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };
    


    return (
        <div>
            {/* Welcome Section with Video */}
            <section className="section-padding bg-white dark:bg-background ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <SectionTitle
                                title="Về Bánh Cuốn Tây Hồ"
                                centered={false}
                                className="mb-6  fade-in-left "
                            />
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed fade-in-up">
                                Từ năm 1972, Bánh Cuốn Tây Hồ đã bắt đầu hành trình mang hương vị
                                truyền thống Việt Nam đến với mọi người. Chúng tôi tự hào về công thức
                                gia truyền và quy trình làm bánh thủ công, tạo nên những chiếc bánh cuốn
                                mỏng, mịn với nhân thơm ngon đặc trưng.
                            </p>
                            <p className="text-gray-700 mb-6 text-lg leading-relaxed fade-in-up">
                                Ngày nay, Bánh Cuốn Tây Hồ đã trở thành một thương hiệu ẩm thực được yêu
                                thích và tin tưởng bởi nhiều thế hệ người Việt Nam, cũng như du khách quốc tế
                                khi đến thăm Hà Nội.
                            </p>
                            <div className="pt-4">
                                <Link to="/menu" className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors">
                                    {t('common.viewMenu')} <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden shadow-xl h-80 lg:h-96">
                            <video
                                ref={videoRef}
                                src="https://res.cloudinary.com/dwqqve7ja/video/upload/v1745419906/o5wjjvglpclr5dze9cp0.mp4"
                                className="absolute inset-0 w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                onError={(e) => console.error("Video failed to load", e)}
                            />


                                {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-lg font-medium mb-2 text-white">{t('home.processTitle')}</p>
                                        <button
                                            onClick={toggleVideo}
                                            className="w-16 h-16 rounded-full bg-cta flex items-center justify-center mx-auto cursor-pointer hover:bg-cta-hover transition-colors"
                                        >
                                            {isPlaying ? <Pause className="h-8 w-8 text-red" /> : <Play className="h-8 w-8 text-white" />}
                                        </button>
                                    </div>
                                </div> */}
                           
                            {!isPlaying && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-lg font-medium mb-2 text-white">{t('home.processTitle')}</p>
                                        <button
                                            onClick={toggleVideo}
                                            className="w-16 h-16 rounded-full bg-cta flex items-center justify-center mx-auto cursor-pointer hover:bg-cta-hover transition-colors"
                                        >
                                            {isPlaying ? <Pause className="h-8 w-8 text-red" /> : <Play className="h-8 w-8 text-white" />}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionVideo;