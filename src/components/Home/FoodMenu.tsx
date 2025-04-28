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
  const limitMenu = menuItems.slice(0,10);

  // const swiperConfig = {
  //   grabCursor: true,
  //   spaceBetween: 16,
  //   centeredSlides: true,
  //   loop: true,
  //   slidesPerView: 1,
  //   // autoplay: {
  //   //   delay: 2000,
  //   //   disableOnInteraction: false,
  //   // },
  //   modules: [Autoplay],
  //   className: 'row',
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //       spaceBetween: 16,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 16,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     1280: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
  // };
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
    <section className="container mx-auto px-4 lg:p-8  my-16">
      <div className="">
        <div className="text-center mb-6">
          <SectionTitle title="Menu" subtitle="" lightText={false} />
        </div>

        <div className=" ">
          <div className="">
            <Swiper {...swiperConfig} >
              {limitMenu?.map((item, index) => (
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

export default FoodMenu;
