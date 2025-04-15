import menuItems from "@/data/menuItems";
import FoodCard from "../FoodCard";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide} from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductBestSale = () => {
    const Menu = menuItems.slice(0, 8);

    return (
        <div className="container mx-auto p-4 my-12">
         
            <div className="text-center mb-6">
                <SectionTitle title="Món ăn Best Sale"
                subtitle=" Đặt món ngay hôm nay hoặc truy cập vào trang Thực đơn để xem đầy đủ các lựa chọn hấp dẫn – chỉ một cú click là mang cả Hà Nội về bàn ăn của bạn!" 
                lightText = {false} />
               
            </div>
            <div className=' m-10 sm:hidden md:hidden lg:hidden xl:hidden'>
                    <Swiper 
                    effect="coverflow"          
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 20,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                      }}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={2}
                    autoplay = {{ 
                        delay: 3000,
                        disableOnInteraction: false,
                     }}
                    
                     navigation ={true}
                     modules={[Autoplay, Navigation, EffectCoverflow]}
                     className="mySwiper"
                     breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
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
                     }}
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
            {/* <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {Menu.map((items, index) => {
                    return (
                        <Link to="/menu">
                           <FoodCard key={index} item={items} />
                        </Link>
                      
                    );
                })}
         
            </div> */}
            
        </div>
    );
}

export default ProductBestSale;