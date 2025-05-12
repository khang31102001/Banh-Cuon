import { Media } from '@/assets/Media';
import { useLanguage } from '@/Contexts/LanguageContext';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle';
const SectionShortStory = () => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <div>
            {/* Welcome Section with Video */}
            <section className="section-padding ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-800">
                            <SectionTitle
                                title1='Về'
                                title2='Bánh Cuốn'
                                title3='Tây Hồ'
                                lightText={true}
                                centered={false}
                                className="mb-6 fade-in-left text-3xl font-extrabold text-[#4A2F17]"
                            />

                            <p className="text-gray-700 text-lg leading-relaxed fade-in-up">
                                Bắt đầu từ năm <strong className="text-[#F4A259]">1972</strong>, Bánh Cuốn <strong className="text-[#EF3F36]">Tây Hồ</strong> đã bắt đầu hành trình lan tỏa hương vị truyền thống Việt.
                                Chúng tôi tự hào giữ gìn công thức gia truyền và quy trình thủ công, tạo nên những chiếc bánh cuốn
                                <span className="italic"> mỏng mịn, thơm ngon, mang đậm hồn dân tộc</span>.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed fade-in-up">
                                Trải qua hơn <strong className="text-[#F4A259]">60 năm</strong>, thương hiệu đã trở thành một phần quen thuộc trong ký ức của người Việt, và là một điểm dừng chân không thể bỏ lỡ với du khách mỗi khi đến <strong>Hà Nội</strong>.
                                Với từng phần bánh là một câu chuyện, chúng tôi mang đến trải nghiệm ẩm thực <span className="font-medium text-[#4A2F17]">đúng chất Việt Nam</span>.
                            </p>

                            <div className="pt-4">
                                <Link
                                    to="/menu"
                                    className="inline-flex items-center font-medium text-[#F4A259] hover:text-[#E07B39] transition-colors"
                                >
                                    {t('common.viewMenu')} <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="grid grid-cols-2 gap-4 relative order-1 md:order-2 animate-on-scroll">
                                    <div className="space-y-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg shadow-md h-auto max-w-full transition-all duration-300 hover:scale-105"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg shadow-md h-auto max-w-full transition-all duration-300 hover:scale-105"
                                    />
                                    </div>
                                    <div className="pt-8">
                                    <img
                                        src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                                        alt="Bánh Cuốn Tây Hồ"
                                        className="rounded-lg shadow-md h-auto max-w-full transition-all duration-300 hover:scale-105"
                                    />
                                    
                                    {/* Video thumbnail with play button */}
                                    <div className="relative mt-4 rounded-lg overflow-hidden group">
                                        <img
                                        src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                                        alt="Xem video về Bánh Cuốn Tây Hồ"
                                        className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                                        />
                                        
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