import { Media } from '@/assets/Media';
import { useLanguage } from '@/Contexts/LanguageContext';
import { ArrowRight, Play, Pause} from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const SectionVideo = () => {
 const {t} = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
   const videoRef = useRef<HTMLVideoElement>(null);

     const toggleVideo = () => {
       if (videoRef.current) {
         if (isPlaying) {
           videoRef.current.pause();
         } else {
           videoRef.current.play();
         }
         setIsPlaying(!isPlaying);
       }
     };

    
    return (
        <div>
            {/* Welcome Section with Video */}
            <section className="section-padding bg-white dark:bg-background ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in  delay-300 ">
                            <h2 className="primary-heading">{t('home.welcomeTitle')}</h2>
                            <p className="text-muted-foreground">
                                {t('home.welcomeText')}
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
                                src={Media.vedieo_header_home}
                                className="absolute inset-0 w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                onError={(e) => console.error("Video failed to load", e)}
                            />

                            {!isPlaying && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="text-center">
                                        <p className="text-lg font-medium mb-2 text-white">{t('home.processTitle')}</p>
                                        <button
                                            onClick={toggleVideo}
                                            className="w-16 h-16 rounded-full bg-cta flex items-center justify-center mx-auto cursor-pointer hover:bg-cta-hover transition-colors"
                                        >
                                            {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
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