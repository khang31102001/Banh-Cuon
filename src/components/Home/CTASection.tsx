import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { NavLink } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-banhcuon-700 mb-6">
            Tận Hưởng Hương Vị Truyền Thống
          </h2>
          <p className="mb-8 text-lg">
            Đến với Bánh Cuốn Tây Hồ để thưởng thức những món ăn truyền thống được chế biến với tình yêu và sự tỉ mỉ.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild className="cta-button text-sm py-2 px-4 flex items-center gap-2">
              <NavLink to="/contact">
                Đặt Bàn Ngay
              </NavLink>
            </Button>
            <Button asChild className="cta-button text-sm py-2 px-4 flex items-center gap-2">
              <NavLink to="/menu">
                Xem Thực Đơn
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
