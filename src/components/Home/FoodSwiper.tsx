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
import { useLanguage } from "@/Contexts/LanguageContext";
interface Props {
  Menu?: [];
}
const FoodSwiper = ({ Menu }: Props) => {
  const limitMenu = menuItems.slice(0, 9);
  const {t} = useLanguage();

  const swiperConfig = {
    grabCursor: true,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    className: 'row',
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };



  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 my-16'>
      <div className="container mx-auto px-4 py-12">

        <div className="text-center mb-6 cursor-pointer">
            <SectionTitle
                underline={false}
                title1={t('home.foodTitle1')}
                subtitle={t('home.foodSubtitle1')}
                className=" fade-in-up"
                subtitleColorClass="text-white drop-shadow-md"
              />

        </div>

        <Swiper {...swiperConfig} >
          {limitMenu?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to="/menu">
                <FoodCard item={item} showSocial={false} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>


        {/* <div className="text-center mt-12 reveal">
          <Button asChild className="">
            <NavLink to="/menu" className="inline-flex items-center">
              Xem Toàn Bộ Thực Đơn <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </Button>
        </div> */}


      </div>
    </section>

  );
};

export default FoodSwiper;
