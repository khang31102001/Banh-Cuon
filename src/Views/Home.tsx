import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import {ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import HeroSection from '@/components/Home/HeroSection';
// import CTASection from '@/components/Home/CTASection';
import GoogleReviews from '@/components/Home/GoogleSection';
import FoodMenu from '@/components/Home/FoodMenu';
import FoodSwiper from '@/components/Home/FoodSwiper';
import SectionShortStory from '@/components/Home/SectionShortStory';
import { Media } from '@/assets/Media';
import { StatsSection } from '@/components/Home/StatsSection';
import { WhyChooseUsSection } from '@/components/Home/WhyChooseUsSection';
import Video from '@/components/Home/SectionVideo';
import { ProcessSection } from '@/components/Home/ProcessSection';



const Home: React.FC = () => {
  const { t } = useLanguage();
  // const parallaxRef = useRef<HTMLDivElement>(null);


  return (
    <div className="flex flex-col min-h-screen" >
      {/* Hero Section with Parallax and Logo */}
      <HeroSection/>

      {/* Welcome Section with Video */}
      <div style={{ backgroundImage: `url(${Media.bg_home_section_story})` }} className="bg-cover bg-center">
         <SectionShortStory/>
      </div>

      {/* section video */}
      {/* <SectionVideo/> */}
       <Video/>
       <ProcessSection/>
       
     <div className=" relative z-0  bg-cover bg-center" style={{ backgroundImage: `url(${Media.bg_home_section_menu})` }}>
        <div className="absolute z-1 inset-0 bg-black bg-opacity-50"></div>
        <div className='relative z-10 py-8'>
          <div className="hidden md:block">
            <FoodMenu/>
          </div>
          <div className="block md:hidden">
            <FoodSwiper/>
          </div> 
        </div>
     </div>
    
      {/* <CTASection/>    */}
     
      <StatsSection/>
      <GoogleReviews/>
      {/* <WhyChooseUsSection/>   */}
      
  

     
    
      
    </div>
  );
};

export default Home;