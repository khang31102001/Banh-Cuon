import SectionTitle from "../SectionTitle";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/Contexts/LanguageContext";
import { timelineDevelop } from "@/data/timelineDevelopment";

const SectionDevelopment = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const {language, t} = useLanguage();
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return(
        <div>
            <section className="section-padding bg-banhcuon-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title1={t('about.timelineTitle')}
                        subtitle={t('about.timeSubtitle')}
                        className="text-banhcuon-900"
                    />
                    
                    <div ref={timelineRef} className="max-w-6xl mx-auto relative">
                        <motion.div 
                            className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-banhcuon-300 origin-top"
                            style={{ scaleY }}
                        >
                            <motion.div 
                                className="absolute left-0 top-0 w-full bg-tay-ho-sunflower h-full"
                                style={{ scaleY }}
                            />
                        </motion.div>
                        
                        {timelineDevelop.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`timeline-item relative z-10 mb-20 ${
                                    index % 2 === 0 ? "text-left" : "text-left md:text-right"
                                }`}
                            >
                                <motion.div 
                                    className="timeline-dot absolute left-4 md:left-1/2 top-8 h-6 w-6 bg-banhcuon-600 rounded-full border-4 border-banhcuon-100 transform md:translate-x-[-12px] translate-x-[-12px] z-20 flex items-center justify-center"
                                    whileHover={{ scale: 1.2 }}
                                >
                                    <span className="text-white text-xs font-bold">{index + 1}</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="md:grid md:grid-cols-5 md:gap-12 items-center pl-12 md:pl-0"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <motion.div
                                        className={`hidden md:block md:col-span-2 overflow-hidden rounded-xl ${
                                            index % 2 === 0 ? "order-1" : "order-2"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title[language]}
                                            className="w-full h-64 object-cover rounded-xl shadow-lg transform transition-transform duration-300"
                                        />
                                    </motion.div>
                                    <motion.div
                                        className={`md:col-span-3 ${
                                            index % 2 === 0 ? "order-2 md:pl-12" : "order-1 md:pr-12"
                                        } bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <span className="inline-block px-4 py-2 rounded-full bg-banhcuon-600 text-white text-sm font-semibold mb-4">
                                            {event.year[language]}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-4 text-banhcuon-900 font-roboto">
                                            {event.title[language]}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{event.description[language]}</p>
                                    </motion.div>
                                    <motion.div
                                        className={`block md:hidden mt-6 overflow-hidden rounded-xl ${
                                            index % 2 === 0 ? "order-3" : "order-3"
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={event.image}
                                            alt={event.title[language]}
                                            className="w-full h-48 object-cover rounded-xl shadow-lg"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionDevelopment;