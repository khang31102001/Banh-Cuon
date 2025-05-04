import menuItems from "@/data/menuItems";
import { Link, NavLink } from "react-router-dom";
import FoodCard from "../FoodCard";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const FoodMenu = () => {
  const limitMenu = menuItems.slice(0, 9);




  return (
    <section className = 'w-full max-w-screen-xl mx-auto px-4 my-16'>
      <div className="container mx-auto px-4 py-12">
           
          <div  className="text-center mb-6 cursor-pointer">
            <NavLink to='/menu'>
            <SectionTitle title="Menu"
              subtitle="Khám phá các loại bánh cuốn đặc sắc của Tây Hồ – từ bánh cuốn chay đến nhân thịt thơm ngon." lightText={false} />
            </NavLink>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {limitMenu.map((items, index) => {
              return (
                <Link to="/menu">
                  <div className=''>
                    <FoodCard key={index} item={items} />
                  </div>
                </Link>

              );
            })}

          </div>

          <div className="text-center mt-12 reveal">
            <Button asChild className="">
              <NavLink to="/menu" className="inline-flex items-center">
                Xem Toàn Bộ Thực Đơn <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </Button>
        </div>


      </div>
    </section>

  );
};

export default FoodMenu;
