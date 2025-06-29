import menuItems from "@/data/menuItems";
import { Link, NavLink } from "react-router-dom";
import FoodCard from "../FoodCard";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "@/Contexts/LanguageContext";
import { SwiperOptions } from "swiper/types";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  backgroundImage?: string;

}
const FoodMenu = ({backgroundImage}:Props) => {
  const limitMenu = menuItems.slice(0, 9);

  const {t} = useLanguage();

  const swiperConfig: SwiperOptions = {
    modules: [Autoplay, Navigation, Pagination, Grid],
    grabCursor: true,
    spaceBetween: 16,
    loop: false,
    centeredSlides: false,
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'row',
    },
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      640: {
        slidesPerView: 2,
      
      }
    }
    
  };
  
  return (
    <section className = 'relative  w-screen h-auto mx-auto px-4 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative container mx-auto px-4 py-12 z-10" >  
          <div  className="text-center mb-6 cursor-pointer">
            <SectionTitle
              title1={t('home.foodTitle1')}
              subtitle={t('home.foodSubtitle1')}
              className=" fade-in-up"
              subtitleColorClass="text-white drop-shadow-md"
            />
          </div>


          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {limitMenu.map((items, index) => {
              return (
                <Link to="/menu">
                  <div className=''>
                    <FoodCard key={index} item={items} showSocial={false} />
                  </div>
                </Link>

              );
            })}

          </div>
          
          {/* // menu for mobile */}
          <div className="relative w-full  md:hidden">
              <Swiper {...swiperConfig} >
                {limitMenu?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Link to="/menu">
                      <FoodCard item={item} showSocial={false} />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination"></div>
          </div>

          {/* <div className="text-center mt-12 reveal">
            <Button asChild className="">
              <NavLink to="/menu" className="inline-flex items-center">
                {t('common.seeAllMenu')} <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </Button>
        </div> */}


      </div>
    </section>

  );
};

export default FoodMenu;
