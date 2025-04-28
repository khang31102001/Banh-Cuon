import menuItems from "@/data/menuItems";
import FoodCard from "../FoodCard";
import { Link, NavLink } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ProductBestSale = () => {
  const Menu = menuItems.slice(0, 10);

  const swiperConfig = {
    grabCursor: true,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 120,
      modifier: 2.5,
      slideShadows: false,
    },
    navigation: true,
    pagination: { clickable: true },
    spaceBetween: 24,
    modules: [EffectCoverflow, Navigation, Pagination],
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 40 },
    },
  };
  return (
    <section className="container mx-auto p-4 my-12">
      <div className="text-center mb-6">
        s
        <SectionTitle title="Món ăn Best Sale"
          subtitle=" Đặt món ngay hôm nay hoặc truy cập vào trang Thực đơn để xem đầy đủ các lựa chọn hấp dẫn – chỉ một cú click là mang cả Hà Nội về bàn ăn của bạn!"
          lightText={false} />

      </div>
      <div className='w-full max-w-[100%] overflow-hidden px-2 sm:px-4'>
        <div>
          <Swiper
            {...swiperConfig}
          >
            {Menu.map((item, index) => (

              <SwiperSlide key={index}>
                <Link to="/menu">
                  <div className="">
                    <FoodCard item={item} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full flex justify-center mt-6">
            <div className="h-1 w-3/4 md:w-1/2 bg-yellow-400 rounded-full shadow-sm"></div>
          </div>
        </div>


      </div>
      {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {Menu.map((items, index) => {
                    return (
                        <Link to="/menu">
                           <FoodCard key={index} item={items}    />
                        </Link>
                      
                    );
                })}
         
            </div> */}

    </section>
  );
}

export default ProductBestSale;