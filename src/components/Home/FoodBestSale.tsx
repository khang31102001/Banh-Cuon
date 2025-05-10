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

const FoodBestSale = () => {
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
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,
    pagination: { clickable: true },
    spaceBetween: 24,
    modules: [EffectCoverflow, Navigation,Pagination, Autoplay],
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 4, spaceBetween: 40 },
    },
  };
  return (
    <section className="container mx-auto p-4 my-12">
         <div  className="text-center mb-6 cursor-pointer fade-in-up">
            <NavLink to='/menu'>
            <SectionTitle
              underline={false}
              title1="Món"
              title2="Đặc trưng"
              subtitle="Khám phá các loại bánh cuốn đặc sắc của Tây Hồ – từ bánh cuốn chay đến nhân thịt thơm ngon." 
              lightText={true}
              className="text-banhcuon-700" 
              
              />
            </NavLink>

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

export default FoodBestSale;