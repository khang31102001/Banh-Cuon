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
const FoodMenu = () => {
  const limitMenu = menuItems.slice(0, 9);

  const {t} = useLanguage();


  return (
    <section className = 'w-full max-w-screen-xl mx-auto px-4 my-16'>
      <div className="container mx-auto px-4 py-12">
           
          <div  className="text-center mb-6 cursor-pointer">
            <SectionTitle
              title1={t('home.foodTitle1')}
              subtitle={t('home.foodSubtitle1')}
              className=" fade-in-up"
              subtitleColorClass="text-white drop-shadow-md"
            />
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
