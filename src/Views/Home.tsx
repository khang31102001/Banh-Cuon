import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import {ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import HeroSection from '@/components/Home/HeroSection';
// import CTASection from '@/components/Home/CTASection';
import ProductBestSale from '@/components/Home/FoodBestSale';
import FoodVegetarian from '@/components/Home/FoodVegetarian';
import FoodNonVegetarian from '@/components/Home/FoodNonVegetarian';
// import Testimonials from '@/components/Home/Testimonials';
import GoogleReviews from '@/components/Home/GoogleSection';
import FoodMenu from '@/components/Home/FoodMenu';
import FoodBestSale from '@/components/Home/FoodBestSale';
import FoodSwiper from '@/components/Home/FoodSwiper';
import CTASection from '@/components/Home/CTASection';
import SectionShortStory from '@/components/Home/SectionShortStory';
import SectionVideo from '@/components/Home/SectionVideo';


const Home: React.FC = () => {
  const { t } = useLanguage();
  // const parallaxRef = useRef<HTMLDivElement>(null);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax and Logo */}
      <HeroSection/>

      {/* Welcome Section with Video */}
      <SectionShortStory/>

      {/* section video */}
      <SectionVideo/>
       
       
      <FoodBestSale/>
      <GoogleReviews/>
      <div className="hidden md:block">
         <FoodMenu/>
      </div>
    
      <div className="block md:hidden">
        <FoodSwiper/>
      </div>
     
      {/* <FoodNonVegetarian/>
      <FoodVegetarian/> */}
      

      <CTASection/>
     
    
      
    </div>
  );
};

export default Home;