import SectionTitle from "../SectionTitle";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const SectionDevelopment = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const timelineEvents = [
        {
            year: "1972",
            title: "Khởi Đầu Truyền Thống",
            description:
                "Bánh Cuốn Tây Hồ được thành lập tại một cửa hàng nhỏ ở phố cổ Hà Nội với công thức gia truyền độc đáo.",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
        },
        {
            year: "1985",
            title: "Mở Rộng Cơ Sở Đầu Tiên",
            description:
                "Sau hơn một thập kỷ thành công, chúng tôi đã mở rộng cơ sở đầu tiên tại Quận Tây Hồ, Hà Nội.",
            image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        },
        {
            year: "1998",
            title: "Phát Triển Thương Hiệu", 
            description:
                "Bánh Cuốn Tây Hồ trở thành thương hiệu được bảo hộ chính thức và bắt đầu mở rộng các chuỗi cửa hàng tại Hà Nội.",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        },
        {
            year: "2005",
            title: "Vươn Ra Thị Trường Quốc Tế",
            description:
                "Lần đầu tiên giới thiệu hương vị Bánh Cuốn Tây Hồ ra thị trường quốc tế thông qua các lễ hội ẩm thực và sự kiện văn hoá.",
            image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
        },
        {
            year: "2015",
            title: "Đổi Mới và Phát Triển",
            description:
                "Cải tiến không gian và trải nghiệm khách hàng, đồng thời giữ nguyên hương vị truyền thống độc đáo.",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
        },
        {
            year: "2023",
            title: "Tầm Nhìn Mới",
            description:
                "Mở rộng hệ thống cửa hàng trên toàn quốc và phát triển kênh bán hàng trực tuyến, mang hương vị truyền thống đến gần hơn với mọi người.",
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
        },
    ];

    return(
        <div>
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title1="Hành Trình Phát Triển"
                        subtitle="Những cột mốc quan trọng trong lịch sử phát triển của Bánh Cuốn Tây Hồ"
                        className="text-banhcuon-900"
                    />
                    
                    <div ref={timelineRef} className="max-w-6xl mx-auto relative">
                        <motion.div 
                            className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-banhcuon-300 origin-top"
                            style={{ scaleY }}
                        >
                            <motion.div 
                                className="absolute left-0 top-0 w-full bg-tay-ho-sunflower h-full"
                                style={{ scaleY }}
                            />
                        </motion.div>
                        
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`timeline-item relative z-10 mb-20 ${
                                    index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                }`}
                            >
                                <motion.div 
                                    className="timeline-dot absolute left-4 md:left-1/2 top-8 h-6 w-6 bg-banhcuon-600 rounded-full border-4 border-banhcuon-100 transform md:translate-x-[-12px] translate-x-[-12px] z-20 flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="md:grid md:grid-cols-5 md:gap-12 items-center pl-12 md:pl-0"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className={`hidden md:block md:col-span-2 overflow-hidden rounded-xl ${
                                            index % 2 === 0 ? "order-1" : "order-2"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-64 object-cover rounded-xl shadow-lg transform transition-transform duration-300"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className={`md:col-span-3 ${
                                            index % 2 === 0 ? "order-2 md:pl-12" : "order-1 md:pr-12"
                                        } bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <span className="inline-block px-4 py-2 rounded-full bg-banhcuon-600 text-white text-sm font-semibold mb-4">
                                            {event.year}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-4 text-banhcuon-900 font-roboto">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                                    </motion.div>
                                    <motion.div
                                        className={`block md:hidden mt-6 overflow-hidden rounded-xl ${
                                            index % 2 === 0 ? "order-3" : "order-3"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-48 object-cover rounded-xl shadow-lg"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionDevelopment;