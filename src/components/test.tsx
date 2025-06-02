const colors = {
    primary: '#DC2626', // Red-600
    secondary: '#FEF3C7', // Amber-100  
    accent: '#059669', // Emerald-600
    dark: '#1F2937', // Gray-800
    light: '#F9FAFB' // Gray-50
  }

  import React, { useState, useEffect, useRef } from 'react';
import { Star, Award, Clock, Users, ChefHat, Heart, MapPin, Truck, Phone, CheckCircle } from 'lucide-react';

// 1. Stats/Numbers Section
const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ customers: 0, years: 0, dishes: 0, reviews: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          const targets = { customers: 5000, years: 20, dishes: 50, reviews: 500 };
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Những Con Số Ấn Tượng
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hơn 20 năm phục vụ, chúng tôi tự hao về chất lượng và sự tin tưởng từ khách hàng
          </p>
        </div>
        
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

// 2. Why Choose Us Section
const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Công thức gia truyền",
      description: "Giữ nguyên hương vị truyền thống qua nhiều thế hệ",
      color: "text-red-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Nguyên liệu tươi ngon",
      description: "Chọn lọc kỹ càng, đảm bảo chất lượng tốt nhất",
      color: "text-green-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Phục vụ nhanh chóng",
      description: "Thời gian chờ tối thiểu, phục vụ tận tâm",
      color: "text-blue-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Giao hàng tận nơi",
      description: "Miễn phí giao hàng trong bán kính 5km",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Với hơn 20 năm kinh nghiệm, chúng tôi mang đến trải nghiệm ẩm thực tuyệt vời nhất
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Process/How It's Made Section
const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Chọn nguyên liệu",
      description: "Gạo tẻ cao cấp, thịt heo tươi ngon được chọn lọc kỹ càng",
      image: "🌾"
    },
    {
      step: "02", 
      title: "Pha bột bánh",
      description: "Bột được pha theo tỷ lệ chuẩn, tạo độ dai mềm hoàn hảo",
      image: "🥄"
    },
    {
      step: "03",
      title: "Tráng bánh",
      description: "Kỹ thuật tráng bánh thủ công, tạo lớp bánh mỏng đều",
      image: "🔥"
    },
    {
      step: "04",
      title: "Cuốn và thưởng thức",
      description: "Cuốn bánh với nhân thịt, chấm nước mắm chua ngọt",
      image: "🥢"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Quy Trình Làm Bánh Cuốn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Từng bước được thực hiện tỉ mỉ để tạo ra món bánh cuốn hoàn hảo
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="text-4xl mb-4">{step.image}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Quick Contact/Location Section
const QuickContactSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ghé Thăm Chúng Tôi Ngay Hôm Nay
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Tọa lạc tại trung tâm Tây Hồ, với không gian ấm cúng và phục vụ chuyên nghiệp. 
              Chúng tôi mở cửa từ 6h sáng đến 10h tối mỗi ngày.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">123 Phố Tây Hồ, Quận Tây Hồ, Hà Nội</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">0123 456 789</span>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-orange-400" />
                <span className="text-gray-300">6:00 - 22:00 (Hàng ngày)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Đặt Bàn Nhanh</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Họ và tên"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-white"
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:border-white"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white">
                <option value="">Chọn số người</option>
                <option value="2">2 người</option>
                <option value="4">4 người</option>
                <option value="6">6 người</option>
                <option value="8">8+ người</option>
              </select>
              <button className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Đặt Bàn Ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component showcasing all sections
const AdditionalHomeSections = () => {
  return (
    <div>
      <StatsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <QuickContactSection />
    </div>
  );
};

export default AdditionalHomeSections;