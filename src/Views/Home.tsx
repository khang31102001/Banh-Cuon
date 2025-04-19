import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import HeroSection from '@/components/Home/HeroSection';
import SectionVideo from '@/components/Home/SectionVideo';
import CTASection from '@/components/Home/CTASection';
import ProductBestSale from '@/components/Home/ProductBestSale';
import FoodVegetarian from '@/components/Home/FoodVegetarian';
import FoodNonVegetarian from '@/components/Home/FoodNonVegetarian';
import Testimonials from '@/components/Home/Testimonials';


const Home: React.FC = () => {
  const { t } = useLanguage();
  // const parallaxRef = useRef<HTMLDivElement>(null);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax and Logo */}
      <HeroSection/>

      

      {/* Welcome Section with Video */}
      <SectionVideo/>
       
       
      <ProductBestSale/>
      <FoodNonVegetarian/>
      <FoodVegetarian/>
      

      {/* <CTASection/> */}
      <Testimonials/>
      
    </div>
  );
};

export default Home;