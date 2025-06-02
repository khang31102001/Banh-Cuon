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
import FoodSwiper from '@/components/Home/FoodSwiper';
import CTASection from '@/components/Home/CTASection';
import SectionShortStory from '@/components/Home/SectionShortStory';
import SectionVideo from '@/components/Home/SectionVideo';
import { Media } from '@/assets/Media';
import Video from '@/components/Home/Video';
import { StatsSection } from '@/components/Home/StatsSection';
import { WhyChooseUsSection } from '@/components/Home/WhyChooseUsSection';
import { QuickContactSection } from '@/components/Home/QuickContactSection';
// import { StatsSection, WhyChooseUsSection, ProcessSection, QuickContactSection, AdditionalHomeSections } from '@/components/test';


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
    
   
        
      {/* <FoodNonVegetarian/>
      <FoodVegetarian/> */}
      

      <GoogleReviews/>
      <WhyChooseUsSection/>  
      {/* <ProcessSection/> */}
      <QuickContactSection/>
      {/* <AdditionalHomeSections/> */}
     
    
      
    </div>
  );
};

export default Home;