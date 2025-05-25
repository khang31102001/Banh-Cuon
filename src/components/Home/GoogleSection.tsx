import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/Contexts/LanguageContext';
import { mockReviews } from '@/data/reviewData';
import AvatarGenerate from "@/components/ui/avatarGenerate";
import { Link, useNavigate } from 'react-router-dom';

interface Review {
  id: string;
  author_name: string;
  rating: number;
  relative_time_description: string;
  text: string;
  profile_photo_url: string;
}

interface GooglePlaceResult {
  reviews: Review[];
  rating: number;
  user_ratings_total: number;
}



// Mock data to use while setting up the real API integration
// const mockReviews: Review[] = [
//   {
//     id: "1",
//     author_name: "Nguyen Van A",
//     rating: 5,
//     relative_time_description: "1 tháng trước",
//     text: "Bánh cuốn ở đây thực sự ngon, nhân nhiều và nước chấm rất đậm đà.",
//     profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     id: "2",
//     author_name: "Tran Thi B",
//     rating: 4,
//     relative_time_description: "2 tuần trước",
//     text: "Tôi rất thích không gian nhà hàng, sạch sẽ và thoáng mát. Bánh cuốn mềm, thơm ngon.",
//     profile_photo_url: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     id: "3",
//     author_name: "Le Van C",
//     rating: 5,
//     relative_time_description: "3 ngày trước",
//     text: "Đồ ăn ngon, giá cả hợp lý, nhân viên phục vụ nhiệt tình. Sẽ quay lại lần sau.",
//     profile_photo_url: "https://randomuser.me/api/portraits/men/67.jpg"
//   },
//   {
//     id: "4",
//     author_name: "Pham Thi D",
//     rating: 5,
//     relative_time_description: "1 tuần trước",
//     text: "Bánh cuốn Tây Hồ 127 là địa điểm yêu thích của gia đình tôi. Chất lượng luôn ổn định.",
//     profile_photo_url: "https://randomuser.me/api/portraits/women/22.jpg"
//   },
//   {
//     id: "5",
//     author_name: "Hoang Van E",
//     rating: 4,
//     relative_time_description: "2 tháng trước",
//     text: "Quán đông khách nhưng phục vụ nhanh. Bánh cuốn thơm ngon, nước chấm đặc biệt.",
//     profile_photo_url: "https://randomuser.me/api/portraits/men/11.jpg"
//   }
// ];

const GoogleReviews = () => {
  const {language,t} = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  
 
 
  
  const reviews = mockReviews || [];
  const placeRating = 4.6;
  const totalReviews = 160;

  return (
    <section className="relative py-20 bg-fixed w-fill bg-cover bg-center" style={{ backgroundImage: "url('https://r2.nucuoimekong.com/wp-content/uploads/cac-quan-an-ngon-o-sai-gon.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className=" relative z-10 flex flex-col justify-center items-center text-white h-full px-4 text-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-vietnam font-bold text-restaurant-dark mb-4 fade-in-up">
           {t('home.customer')} <span className="text-banh-blue">{t('home.speak')}</span> {t('home.aboutUs')}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
              alt="Google" 
              className="h-8 object-contain"
            />
            <div className="flex items-center">
              <Star className="text-tay-ho-sunflower fill-current" size={24} />
              <span className="font-bold text-xl ml-1">{placeRating.toFixed(1)}</span>
              <span className="text-tay-ho-sunflower ml-2">({totalReviews} {t('home.reviews')})</span>
            </div>
          </div>
        </div>

       
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((review) => (
                    <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3 cursor-pointer" onClick={() => review.link && window.open(review.link, "_blank")}>
                      <Card className="h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            {/* <img
                              src={review.profile_photo_url}
                              alt={review.author_name}
                              className="w-12 h-12 rounded-full"
                            /> */}
                            <AvatarGenerate name={review.author_name}   />
                            <div>
                              <h4 className="font-semibold text-left">{review.author_name}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      className="text-yellow-400 fill-current"
                                    />
                                  ))}
                                </div>
                                <div>
                                  <span className="text-gray-500 text-sm ">
                                    {review.relative_time_description}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        <div className="line-clamp-4">
                          <p className="text-gray-600 text-left">{review.text[language]}</p>
                        </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        
      </div>
    </section>
  );
};

export default GoogleReviews;
