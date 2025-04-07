import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

const CTASection = () => {
  return (
    <div className="py-16 bg-banhcuon-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Tận Hưởng Hương Vị Truyền Thống
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Đến với Bánh Cuốn Ville để thưởng thức những món ăn truyền thống được
            chế biến với tình yêu và sự tỉ mỉ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Gửi tin nhắn qua Facebook */}
            <a
              href="https://m.me/banhcuonville" // <- Thay bằng link Facebook Page Messenger thật
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="bg-white text-restaurant-primary hover:bg-white/90 rounded-md w-full sm:w-auto flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Nhắn Tin Facebook
              </Button>
            </a>

            {/* Gọi điện thoại ngay */}
            <a
              href="tel:0123456789" // <- Thay bằng số điện thoại thật
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                className="bg-white text-restaurant-primary hover:bg-white/90 rounded-md w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Gọi Ngay
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
