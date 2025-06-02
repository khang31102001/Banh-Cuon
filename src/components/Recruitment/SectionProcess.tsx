import { useLanguage } from "@/Contexts/LanguageContext";
import SectionTitle from "../SectionTitle";

const SectionProcess = () => {
    const {language, t} = useLanguage();
    const applyProcess = [
        {
            step: {
                vi: "01",
                en: "01",
                jp: "01"
            },
            title: {
                vi: "Nộp Đơn",
                en: "Apply",
                jp: "応募"
            },
            description: {
                vi: "Điền đơn ứng tuyển trực tuyến hoặc gửi CV của bạn đến email info@tayho127.com",
                en: "Fill out the online application form or send your CV to info@tayho127.com",
                jp: "オンライン応募フォームに記入するか、履歴書を info@tayho127.com 宛にお送りください。"
            },
            
        },
        {
            step: {
                vi: "02",
                en: "02",
                jp: "02"
            },
            title: {
                vi: "Phỏng Vấn",
                en: "Interview",
                jp: "面接"
            },
            description: {
                vi: "Ứng viên phù hợp sẽ được mời tham gia phỏng vấn trực tiếp hoặc qua video call",
                en: "Qualified candidates will be invited for an interview, either in person or via video call.",
                jp: "適任と判断された応募者には、対面またはビデオ通話での面接にご参加いただきます。"
            },
            
        },
        {
            step: {
                vi: "03",
                en: "03",
                jp: "03"
            },
            title: {
                vi: "Thử Việc",
                en: "Probation",
                jp: "試用期間"
            },
            description: {
                vi: "Ứng viên xuất sắc sẽ được mời tham gia giai đoạn thử việc trước khi gia nhập chính thức",
                en: "Outstanding candidates will be invited to a probation period before officially joining the team.",
                jp: "優秀な応募者は、正式に入社する前に試用期間にご参加いただきます。"
            },
            
        },
    ]
    return (
        <div>
            {/* Application Process Section */}
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title1={t('recruitment.processTitle')}
                        subtitle={t('recruitment.processSubtitle')}
                    />

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {applyProcess.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm text-center animate-on-scroll"
                                >
                                    <div className="w-12 h-12 bg-banhcuon-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        {item.step[language]}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-banhcuon-900 ">
                                        {item.title[language]}
                                    </h3>
                                    <p className="text-gray-600">{item.description[language]}</p>
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