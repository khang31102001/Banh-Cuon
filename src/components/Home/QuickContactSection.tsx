
export const QuickContactSection = () => {
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ghé Thăm Chúng Tôi Ngay Hôm Nay
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Tọa lạc tại trung tâm 127 Đinh Tên Hoàng - Q1, với không gian ấm cúng và phục vụ chuyên nghiệp. 
                Chúng tôi mở cửa từ 5h30 sáng đến 21h30 tối mỗi ngày.
              </p>
              
              {/* <div className="space-y-4">
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
              </div> */}
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
  