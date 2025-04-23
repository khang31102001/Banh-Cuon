import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { NavLink } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-restaurant-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Tận Hưởng Hương Vị Truyền Thống
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Đến với Bánh Cuốn Ville để thưởng thức những món ăn truyền thống được chế biến với tình yêu và sự tỉ mỉ.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild className="bg-white text-restaurant-primary hover:bg-white/90 rounded-md">
              <NavLink to="/contact">
                Đặt Bàn Ngay
              </NavLink>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 rounded-md">
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
