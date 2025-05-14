import SectionTitle from "../SectionTitle";

const SectionStory = () => {
return(
    <div>
         <section className="section-padding bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animation-element">
                            <SectionTitle
                                title1="Câu Chuyện Của Chúng Tôi"
                                centered={false}
                                className="mb-6"
                            />
                            <p className="text-gray-600 mb-4 font-playfair">
                                Bánh Cuốn Tây Hồ bắt đầu từ một cửa hàng nhỏ tại phố cổ Hà Nội vào năm 1972.
                                Với công thức gia truyền độc đáo và tình yêu dành cho ẩm thực truyền thống Việt Nam,
                                chúng tôi đã dần xây dựng được thương hiệu uy tín và được yêu mến trong lòng
                                người dân Hà Nội.
                            </p>
                            <p className="text-gray-600 mb-4 font-playfair">
                                Trải qua hơn 5 thập kỷ, Bánh Cuốn Tây Hồ vẫn giữ nguyên hương vị truyền thống
                                với bột gạo tươi được làm thủ công mỗi ngày, nhân thịt thơm ngon, và nước chấm
                                đặc trưng theo công thức bí truyền.
                            </p>
                            <p className="text-gray-600 font-playfair">
                                Ngày nay, Bánh Cuốn Tây Hồ đã phát triển thành chuỗi nhà hàng trên khắp Việt Nam,
                                nhưng chúng tôi vẫn luôn giữ vững triết lý kinh doanh: tôn trọng truyền thống,
                                đảm bảo chất lượng, và không ngừng đổi mới để mang đến trải nghiệm tốt nhất cho khách hàng.
                            </p>
                        </div>
                        <div className="relative animation-element">
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
    </div>
);

}
export default SectionStory;