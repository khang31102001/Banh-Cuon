import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import {ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import HeroSection from '@/components/Home/HeroSection';
// import CTASection from '@/components/Home/CTASection';
import GoogleReviews from '@/components/Home/GoogleSection';
import FoodMenu from '@/components/Home/FoodMenu';
import SectionShortStory from '@/components/Home/SectionShortStory';
import { Media } from '@/assets/Media';
import { StatsSection } from '@/components/Home/StatsSection';
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
      
       <SectionShortStory 
       backgroundImage={Media.bg_home_section_story}/>
      
      {/* section video */}
      {/* <SectionVideo/> */}
       <Video videoOverlay='https://mayviendong.vn/wp-content/uploads/2018/09/banh-cuon-0.jpg' />
       <ProcessSection/>
       <FoodMenu backgroundImage="https://feedthepudge.com/wp-content/uploads/2025/02/Banh-Cuon-Cover-.webp"/>
    
      {/* <CTASection/>    */}
     
      <StatsSection/>
      <GoogleReviews/>
      {/* <WhyChooseUsSection/>   */}
      
  

     
    
      
    </div>
  );
};

export default Home;