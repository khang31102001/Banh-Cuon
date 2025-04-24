import SectionTitle from "../SectionTitle";

const SectionGallery = () => {

    return (
        <div>
            {/* Workplace Gallery Section */}
            <section className="bg-banhcuon-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Môi Trường Làm Việc"
                        subtitle="Khám phá không gian làm việc năng động và thân thiện tại Bánh Cuốn Tây Hồ"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4  animation-element in-vew">
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                                    alt="Nhà hàng Bánh Cuốn Tây Hồ"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                                    alt="Nhà bếp Bánh Cuốn Tây Hồ"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                    alt="Đội ngũ nhân viên Bánh Cuốn Tây Hồ"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                                    alt="Không gian làm việc Bánh Cuốn Tây Hồ"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                                    alt="Đầu bếp Bánh Cuốn Tây Hồ"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                                    alt="Quá trình làm bánh cuốn"
                                />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                                    alt="Nhân viên phục vụ Bánh Cuốn Tây Hồ"
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-lg object-cover"
                                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                                    alt="Đội ngũ quản lý Bánh Cuốn Tây Hồ"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionGallery;