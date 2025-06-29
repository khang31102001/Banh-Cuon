import { Media } from "@/assets/Media";
import SectionTitle from "../SectionTitle";
import { t } from "node_modules/framer-motion/dist/types.d-CQt5spQA";
import { useLanguage } from "@/Contexts/LanguageContext";

const SectionStory = () => {
    const {t} = useLanguage();
return(
    <div>
         <section className="section-padding bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animation-element">
                            <SectionTitle
                                title3={t('about.storyTitle')}
                                lightText = {true}
                                centered={false}
                             
                                className="mb-6 text-black"
                            />
                            <p className="text-gray-600 mb-4 ">{t('about.storyDescription1')}</p>
                            <p className="text-gray-600 mb-4 ">{t('about.storyDescription2')}</p>
                            <p className="text-gray-600 ">{t('about.storyDescription3')}</p>
                        </div>
                        <div className="relative animation-element">
                            <img
                                src="https://res.cloudinary.com/dwqqve7ja/image/upload/v1751182632/511201316_122119091714885814_2975169683791964939_n_ijxpa2.jpg"
                                alt="Bánh Cuốn Tây Hồ"
                                className="rounded-lg shadow-lg w-full object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48">
                                <p className="text-[#F4A259]  text-lg">{t('about.storyImgtitle1')}</p>
                                <p className="text-gray-600">{t('about.storyImgtitle2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
);

}
export default SectionStory;