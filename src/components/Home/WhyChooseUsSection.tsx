import { Star, Award, Clock, Users, ChefHat, Heart, MapPin, Truck, Phone, CheckCircle } from 'lucide-react';
export const WhyChooseUsSection = () => {
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