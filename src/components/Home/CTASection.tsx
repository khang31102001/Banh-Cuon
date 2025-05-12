import { Button } from "@/components/ui/button"
import { NavLink } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="py-20 bg-[hsl(35,40%,95%)]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair text-banhcuon-900 font-bold mb-4 tracking-wide drop-shadow-sm fade-in-up">
              Tự hào giữ gìn hương vị truyền thống hơn 60 năm
          </h2>
          <p className="mb-8 text-lg text-gray-700 leading-relaxed fade-in-up">
              Bánh cuốn Tây Hồ không chỉ là món ăn, mà là ký ức, là tinh hoa ẩm thực Việt được trao truyền qua bao thế hệ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-down">
            <Button asChild className="bg-[#F4A259] hover:bg-[#E07B39] text-white text-sm px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300">
              <NavLink to="/contact">Đặt Bàn Ngay</NavLink>
            </Button>
            <Button asChild className="bg-white border border-[#F4A259] hover:bg-[#F4A259] hover:text-white text-[#F4A259] text-sm px-6 py-3 rounded-lg font-medium shadow-sm transition-all duration-300">
              <NavLink to="/menu">Xem Thực Đơn</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
