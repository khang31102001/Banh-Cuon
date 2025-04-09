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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966890303787!2d105.84844541493326!3d21.02921978599584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd6a23ad3%3A0xe0dd278a5e507665!2zMTI3IMSQaeG7mW5oIFRpw6puIEhvw6BuZywgSMOgbmcgVHLhu5FuZywgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1656403126389!5m2!1svi!2s"
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