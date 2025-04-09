import SectionTitle from "../SectionTitle";

const SectionProcess = () => {
    return (
        <div>
            {/* Application Process Section */}
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Quy Trình Ứng Tuyển"
                        subtitle="Tìm hiểu các bước trong quy trình tuyển dụng của Bánh Cuốn Tây Hồ"
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Nộp Đơn",
                                    description:
                                        "Điền đơn ứng tuyển trực tuyến hoặc gửi CV của bạn đến email tuyendung@banhcuontayho.vn",
                                },
                                {
                                    step: "02",
                                    title: "Phỏng Vấn",
                                    description:
                                        "Ứng viên phù hợp sẽ được mời tham gia phỏng vấn trực tiếp hoặc qua video call",
                                },
                                {
                                    step: "03",
                                    title: "Thử Việc",
                                    description:
                                        "Ứng viên xuất sắc sẽ được mời tham gia giai đoạn thử việc trước khi gia nhập chính thức",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm text-center animate-on-scroll"
                                >
                                    <div className="w-12 h-12 bg-banhcuon-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-banhcuon-900 font-serif">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionProcess;