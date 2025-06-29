import { MenuItem } from "@/data/menuItems";
import Lightbox from "../Lightbox";
import FoodCard from "../FoodCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
interface Props {
    data: MenuItem[] | undefined;

}
const ProductList = ({data}:Props) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [isHover, setIsHover] = useState<boolean>(false);
  
    const openLightbox = (image: string) => {
      setCurrentImage(image);
      setLightboxOpen(true);
    };
  
    const closeLightbox = () => {
      setLightboxOpen(false);
    };


    const swiperConfig: SwiperOptions = {
      modules: [Autoplay, Navigation, Pagination,Grid],
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
    
    if(!data) return null;

    return(
      <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid for desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-up">
          {data.map((item) => (
            <FoodCard key={item.id} item={item} openLightbox={openLightbox} showSocial={true} />
          ))}
        </div>
    
        {/* Swiper for mobile */}
      {data.length > 0 && (
          <div 
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=> setIsHover(false)}
          className="relative md:hidden w-full py-8"
          >
            <Swiper {...swiperConfig} className="w-full">
              {data.map((item) => (
                <SwiperSlide
               
                 key={item.id} className="!h-auto">
                  <FoodCard item={item} openLightbox={openLightbox} showSocial={true} />
                </SwiperSlide>
              ))}
             <div>
              <button
                  className={`absolute custom-button-prev top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-500 text-amber-700 hover:text-white rounded-md py-8 px-2 transform transition-transform duration-3000 ease-in-out ${isHover ? "translate-x-0" : "-translate-x-[calc(100%+0.5rem)]"} `}
                  onClick={() => {}}
                  >
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                  </button>
                  <button
                  className={`absolute custom-button-next top-1/2 -translate-y-1/2 bg-amber-100 hover:bg-amber-500 text-amber-700 hover:text-white rounded-md py-8 px-2 transform transition-transform duration-3000 ease-in-out ${isHover ? " translate-x-0" : "translate-x-[calc(100%+0.5rem)]"} `}
                  onClick={() => {}}
                  >
                  <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </button>
             </div>
            </Swiper>
              <div className="swiper-pagination"></div>
          </div>
      )}
      </div>
    
      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No items found with the selected filter.
          </p>
        </div>
      )}
    
      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        image={currentImage}
        onClose={closeLightbox}
      />
    </section>
    
    )
}

export default ProductList;