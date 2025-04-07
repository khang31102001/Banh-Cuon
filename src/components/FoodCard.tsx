import React, { useState } from 'react';
import { type MenuItem } from '../data/menuItems';
import { Badge } from './ui/badge';
import { useLanguage } from '@/Contexts/LanguageContext';

interface FoodCardProps {
  item: MenuItem;
  openLightbox: (image: string) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, openLightbox }) => {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  return (
    <div
      className="food-card group bg-white dark:bg-card transition-all duration-300 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg" style={{ height: '240px' }}>
        <img
          src={item.image || 'https://placehold.co/400x300/e2d1c3/white?text=Bánh+Cuốn+Tây+Hồ'}
          alt={item.name[language]}
          className={`food-card-image object-cover w-full h-full transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
          onClick={() => openLightbox(item.image)}
        />
        
        <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center">
          <img src="/images/logo.png" alt="Tây Hồ Logo" className="h-10 object-contain" />
          
          {item.isVegetarian && (
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              {t('common.vegetarian')}
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-xl font-semibold font-poppins text-white">{item.name[language]}</h3>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description[language]}</p>
        
        <div className="pt-2">
          <h4 className="text-sm font-medium">{t('menu.ingredients')}:</h4>
          <p className="text-xs text-muted-foreground">
            {item.ingredients[language].join(', ')}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="font-semibold text-primary">
            {formatPrice(item.price)} {t('menu.currency')}
          </div>
          <button className="cta-button text-sm py-2 px-4 flex items-center gap-2">
            <span>{t('common.orderNow')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;