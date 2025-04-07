import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/Contexts/LanguageContext';
import HeroSection from '@/components/Home/HeroSection';
import SectionVideo from '@/components/Home/SectionVideo';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/Home/CTASection';


const Home: React.FC = () => {
  const { t } = useLanguage();
  // const parallaxRef = useRef<HTMLDivElement>(null);
  


  

  const testimonials = [
    {
      id: 1,
      name: t('home.testimonial1Name'),
      text: t('home.testimonial1Text'),
    },
    {
      id: 2,
      name: t('home.testimonial2Name'),
      text: t('home.testimonial2Text'),
    },
    {
      id: 3,
      name: t('home.testimonial3Name'),
      text: t('home.testimonial3Text'),
    },
  ];

  

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax and Logo */}
      <HeroSection/>

      

      {/* Welcome Section with Video */}
      <SectionVideo/>
       
      <ProductCard/>

      <CTASection/>
      
    </div>
  );
};

export default Home;