import { useEffect, useRef, useState } from "react";
import { Star, Award, Users, ChefHat} from 'lucide-react';
import SectionTitle from "../SectionTitle";
export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ customers: 0, years: 0, dishes: 0, reviews: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          const targets = { customers: 5000, years: 60, dishes: 50, reviews: 500 };
          Object.keys(targets).forEach(key => {
            let start = 0;
            const end = targets[key];
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts(prev => ({ ...prev, [key]: end }));
                clearInterval(timer);
              } else {
                setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
              }
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">

        <SectionTitle
        title1="Những Con Số Ấn Tượng"
        subtitle=" Hơn 60 năm phục vụ, chúng tôi tự hao về chất lượng và sự tin tưởng từ khách hàng"
        lightText={true}
        />        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">{counts.customers.toLocaleString()}+</div>
            <p className="text-gray-600">Khách hàng hài lòng</p>
          </div>
          
          <div className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">{counts.years}+</div>
            <p className="text-gray-600">Năm kinh nghiệm</p>
          </div>
          
          <div className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <ChefHat className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">{counts.dishes}+</div>
            <p className="text-gray-600">Món ăn đa dạng</p>
          </div>
          
          <div className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-800 mb-2">{counts.reviews}+</div>
            <p className="text-gray-600">Đánh giá 5 sao</p>
          </div>
        </div>
      </div>
    </section>
  );
};
