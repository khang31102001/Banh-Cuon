import SectionTitle from "../SectionTitle";

const SectionDevelopment = () => {
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
           
           <div>
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Hành Trình Phát Triển"
                        subtitle="Những cột mốc quan trọng trong lịch sử phát triển của Bánh Cuốn Tây Hồ"
                    />
                    
                    {/* Timeline container với line ở giữa */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Đường dọc timeline */}
                        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-banhcuon-300 transform md:translate-x-[-2px] z-0"></div>
                        
                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item relative z-10 mb-16 fade-in-up ${
                                    index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                }`}
                            >
                                {/* Điểm tròn trên timeline */}
                                <div className="timeline-dot absolute left-4 md:left-1/2 top-8 h-4 w-4 bg-banhcuon-600 rounded-full border-4 border-banhcuon-100 transform md:translate-x-[-8px] translate-x-[-8px] z-20"></div>
                                
                                <div className="md:grid md:grid-cols-5 md:gap-8 items-center pl-10 md:pl-0">
                                    <div
                                        className={`hidden md:block md:col-span-2 ${
                                            index % 2 === 0 ? "order-1" : "order-2"
                                        }`}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div
                                        className={`md:col-span-3 ${
                                            index % 2 === 0 ? "order-2 md:pl-8" : "order-1 md:pr-8"
                                        } bg-white p-6 rounded-lg shadow-md`}
                                    >
                                        <span className="inline-block px-3 py-1 rounded-full bg-banhcuon-600 text-white text-sm font-semibold mb-2">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2 text-banhcuon-900 font-roboto">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                    <div
                                        className={`block md:hidden mt-4 ${
                                            index % 2 === 0 ? "order-3" : "order-3"
                                        }`}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
    
    }
export default SectionDevelopment;