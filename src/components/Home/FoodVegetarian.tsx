import menuItems from "@/data/menuItems";
import { Link, NavLink } from "react-router-dom";
import FoodCard from "../FoodCard";
import SectionTitle from "../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
const FoodVegetarian = () => {
  const filterVegetarian = menuItems.filter(
    (items) => items.category.name === "Món chay"
  );

  const swiperConfig = {

    grabCursor: true,

    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    className: 'row',
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
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
    <section className="container mx-auto px-4 lg:p-8  my-16">
      <div className="border border-gray-300 rounded-2xl shadow-lg p-6 bg-white/70 backdrop-blur-sm">
        <div className="text-center mb-6">
          <SectionTitle title="Món chay" subtitle="" lightText={false} />
        </div>

        <div className="  ">
          <div className="">
            <Swiper {...swiperConfig} className="mx-4">
              {filterVegetarian?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link to="/menu">
                    <FoodCard item={item} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
          <div className="text-center mt-12 reveal">
            <Button asChild className="">
              <NavLink to="/menu" className="inline-flex items-center">
                Xem Toàn Bộ Thực Đơn <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FoodVegetarian;
