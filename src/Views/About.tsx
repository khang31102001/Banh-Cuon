import React from "react";
import SectionTitle from "../components/SectionTitle";
import SectionBanner from "@/components/About/SectionBanner";

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

const values = [
    {
        icon: (
            <svg
                className="w-12 h-12 text-banhcuon-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
            </svg>
        ),
        title: "Truyền Thống",
        description:
            "Chúng tôi tôn trọng và gìn giữ công thức truyền thống, đảm bảo hương vị đích thực của bánh cuốn Tây Hồ.",
    },
    {
        icon: (
            <svg
                className="w-12 h-12 text-banhcuon-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        title: "Chất Lượng",
        description:
            "Chúng tôi chỉ sử dụng những nguyên liệu tươi ngon nhất và quy trình nghiêm ngặt để đảm bảo chất lượng vượt trội.",
    },
    {
        icon: (
            <svg
                className="w-12 h-12 text-banhcuon-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        title: "Giá Trị",
        description:
            "Chúng tôi cam kết mang đến trải nghiệm ẩm thực giá trị nhất cho khách hàng với giá cả hợp lý.",
    },
    {
        icon: (
            <svg
                className="w-12 h-12 text-banhcuon-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
        ),
        title: "Cộng Đồng",
        description:
            "Chúng tôi tự hào là một phần của cộng đồng và luôn hỗ trợ các hoạt động văn hóa, xã hội địa phương.",
    },
];

const About = () => {
    return (
        <div>
            <SectionBanner
                title="Giới Thiệu"
                breadcrumbs={[{ label: "Giới Thiệu", path: "/about" }]}
                backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            >
                <p className="text-white/90 max-w-3xl mx-auto text-center mt-4">
                    Tìm hiểu câu chuyện, giá trị cốt lõi và hành trình phát triển của Bánh Cuốn Tây Hồ
                </p>
            </SectionBanner>

            {/* Story Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-on-scroll">
                            <SectionTitle
                                title="Câu Chuyện Của Chúng Tôi"
                                centered={false}
                                className="mb-6"
                            />
                            <p className="text-gray-600 mb-4">
                                Bánh Cuốn Tây Hồ bắt đầu từ một cửa hàng nhỏ tại phố cổ Hà Nội vào năm 1972.
                                Với công thức gia truyền độc đáo và tình yêu dành cho ẩm thực truyền thống Việt Nam,
                                chúng tôi đã dần xây dựng được thương hiệu uy tín và được yêu mến trong lòng
                                người dân Hà Nội.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Trải qua hơn 5 thập kỷ, Bánh Cuốn Tây Hồ vẫn giữ nguyên hương vị truyền thống
                                với bột gạo tươi được làm thủ công mỗi ngày, nhân thịt thơm ngon, và nước chấm
                                đặc trưng theo công thức bí truyền.
                            </p>
                            <p className="text-gray-600">
                                Ngày nay, Bánh Cuốn Tây Hồ đã phát triển thành chuỗi nhà hàng trên khắp Việt Nam,
                                nhưng chúng tôi vẫn luôn giữ vững triết lý kinh doanh: tôn trọng truyền thống,
                                đảm bảo chất lượng, và không ngừng đổi mới để mang đến trải nghiệm tốt nhất cho khách hàng.
                            </p>
                        </div>
                        <div className="relative animate-on-scroll">
                            <img
                                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                                alt="Bánh Cuốn Tây Hồ"
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48">
                                <p className="text-banhcuon-900 font-bold text-lg">Hơn 50 năm</p>
                                <p className="text-gray-600">gìn giữ hương vị truyền thống</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Hành Trình Phát Triển"
                        subtitle="Những cột mốc quan trọng trong lịch sử phát triển của Bánh Cuốn Tây Hồ"
                    />

                    <div className="max-w-4xl mx-auto">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={index}
                                className={`timeline-item animate-on-scroll ${index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                    }`}
                            >
                                <div className="timeline-dot"></div>
                                <div className="md:grid md:grid-cols-5 md:gap-8 items-center">
                                    <div
                                        className={`hidden md:block md:col-span-2 ${index % 2 === 0 ? "order-1" : "order-2"
                                            }`}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div
                                        className={`md:col-span-3 ${index % 2 === 0 ? "order-2" : "order-1"
                                            }`}
                                    >
                                        <span className="text-banhcuon-600 font-bold text-lg">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2 text-banhcuon-900 font-serif">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600">{event.description}</p>
                                    </div>
                                    <div
                                        className={`block md:hidden mt-4 ${index % 2 === 0 ? "order-3" : "order-3"
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

            {/* Values Section */}
            <section className="section-padding bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Giá Trị Cốt Lõi"
                        subtitle="Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center animate-on-scroll"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-banhcuon-900 font-serif">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
        </div>


    );
};

export default About;
