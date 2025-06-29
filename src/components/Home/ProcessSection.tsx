import SectionTitle from "../SectionTitle";

export const ProcessSection = () => {
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
                  <p className="text-black leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};