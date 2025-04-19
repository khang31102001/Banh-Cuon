import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import FoodCard from "../FoodCard";
import menuItems from "@/data/menuItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const FoodNonVegetarian = () => {
  const filterNonVegetarian = menuItems.filter(
    (items) => items.category.name === "Món Mặn"
  );

  
  const swiperConfig = {
   
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
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
    <section className="container mx-auto p-4 my-12">
      <div className="text-center mb-6">
        <SectionTitle title="Món Mặn" subtitle="" lightText={false} />
      </div>

      <div className="">
        <div className="">
          <Swiper {...swiperConfig} className="row">
            {filterNonVegetarian?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to="/menu">
                  <FoodCard item={item} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FoodNonVegetarian;
