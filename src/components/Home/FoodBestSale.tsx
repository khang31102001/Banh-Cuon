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
import { useLanguage } from "@/Contexts/LanguageContext";

const FoodBestSale = () => {
  const Menu = menuItems.slice(0, 20);
  const {t} = useLanguage();

  const swiperConfig = {
    grabCursor: true,
    // effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 120,
    //   modifier: 2.5,
    //   slideShadows: false,
    // },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: false,
    pagination: { clickable: true },
    spaceBetween: 24,
    modules: [EffectCoverflow, Navigation, Pagination, Autoplay],
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 8 },
      768: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 40 },
    },
  };
  return (
    <section className="container mx-auto p-4 my-12">
      <div className="text-center mb-6 cursor-pointer ">
        <NavLink to='/menu'>
          <SectionTitle
            underline={false}
            title1={t('home.foodTitle1')}
            subtitle={t('home.foodSubtitle1')}
            className=" fade-in-up"
            subtitleColorClass="text-white drop-shadow-md"
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
                    <FoodCard item={item} showSocial={false} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
        {/* <div className="text-center mt-12 reveal">
          <Button
            className="bg-white text-grey-600 text-sm px-6 py-3 border border-banh-green rounded-lg font-medium shadow-md transition-all duration-300 
              bg-gradient-to-r from-banh-green to-banh-green 
              bg-[length:0%_100%] bg-left hover:bg-[length:100%_100%] hover:text-white 
              bg-no-repeat"
                    >
            <Link to="/menu" className="inline-flex items-center">
              Xem Toàn Bộ Thực Đơn <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>

        </div> */}

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