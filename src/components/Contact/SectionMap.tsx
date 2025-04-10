import SectionTitle from "../SectionTitle";

const SectionMap = () => {
    return (
        <div>
            {/* Map Section */}
            <section className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <SectionTitle
                        title="Vị Trí Cửa Hàng"
                        subtitle="Ghé thăm cửa hàng Bánh Cuốn Tây Hồ ở Hà Nội ngay hôm nay"
                    />

                    <div className="h-[450px] w-full rounded-xl overflow-hidden shadow-lg animate-on-scroll">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62708.30243143446!2d106.696954!3d10.790705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752900177c2639%3A0x633e01835ec7db4b!2zQsOhbmggQ3Xhu5FuIFTDonkgSOG7kyAxMjc!5e0!3m2!1sen!2s!4v1744280122489!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Vị trí Bánh Cuốn Tây Hồ"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div> 

    );
}
export default SectionMap;