import { useLanguage } from "@/Contexts/LanguageContext";
import SectionTitle from "../SectionTitle";

const SectionValue = () => {
    const {language,t} = useLanguage();
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
            title: {
                vi: "Truyền Thống",
                en: "Tradition",
                jp: "伝統"
            },
            description: {
                vi: "Truyền Thống",
                en: "Tradition",
                jp: "伝統"
            },
            
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
            title: {
                vi: "Chất Lượng",
                en: "Quality",
                jp: "品質"
            },
            description: {
                vi: "Chúng tôi chỉ sử dụng những nguyên liệu tươi ngon nhất và quy trình nghiêm ngặt để đảm bảo chất lượng vượt trội.",
                en: "We use only the freshest ingredients and follow strict processes to ensure exceptional quality.",
                jp: "私たちは最高に新鮮な食材のみを使用し、厳格な工程を守ることで卓越した品質を実現しています。"
            },
            
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
            title: {
                vi: "Giá Trị",
                en: "Value",
                jp: "価値"
            },
            description: {
                vi: "Chúng tôi cam kết mang đến trải nghiệm ẩm thực giá trị nhất cho khách hàng với giá cả hợp lý.",
                en: "We are committed to delivering the most valuable dining experience to our customers at a reasonable price.",
                jp: "お客様にとって最も価値のある食体験を、手頃な価格で提供することをお約束します。"
            },
            
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
            title: {
                vi: "Cộng Đồng",
                en: "Community",
                jp: "コミュニティ"
            },
            description: {
                vi: "Chúng tôi tự hào là một phần của cộng đồng và luôn hỗ trợ các hoạt động văn hóa, xã hội địa phương.",
                en: "We are proud to be part of the community and actively support local cultural and social activities.",
                jp: "私たちは地域社会の一員であることを誇りに思い、地域の文化的・社会的活動を積極的に支援しています。"
            },
            
        },
    ];
    return(
        <div>
              <section className="section-padding bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title1={t('about.valueTitle')}
                        subtitle={t('about.valueSubtitle')}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center animate-on-scroll"
                            >
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-banhcuon-900 font-vietnam">
                                    {value.title[language]}
                                </h3>
                                <p className="text-gray-600 font-playfair">{value.description[language]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
    
    }
    export default SectionValue;