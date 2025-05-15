import React, { useState } from 'react';
import  { type MenuItem } from '@/data/menuItems';
import { Badge } from './ui/badge';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { toast } from 'sonner';
import { Copy, Facebook, Linkedin } from 'lucide-react';

interface FoodCardProps {
  item?: MenuItem;
  className?: string; 
  openLightbox?: (image: string) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, openLightbox, className }) => {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };
  const handleCopyLink = (itemId: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const url = `${window.location.origin}/menu/${itemId}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast.success("Đã sao chép đường dẫn vào bộ nhớ tạm");
      })
      .catch(() => {
        toast.error("Không thể sao chép đường dẫn");
      });
  };
  const handleOrder = () => {
    const link = "https://shopeefood.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang";

    if (link.startsWith("https://shopeefood.vn/ho-chi-minh/banh-cuon-tay-ho-dinh-tien-hoang")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      console.log("Liên kết không hợp lệ.");
    }
  }
  
  const handleShareFacebook = (itemId: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const url = `${window.location.origin}/menu/${itemId}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, 
      '_blank', 'width=600,height=400');
  };
  
  const handleShareLinkedIn = (itemId: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    const url = `${window.location.origin}/menu/${itemId}`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, 
      '_blank', 'width=600,height=400');
  };
  return (
    <div
     className={`food-card mx-auto group bg-white dark:bg-card transition-all duration-300 hover:translate-y-[-5px] 
     min-w-[280px] max-w-[480px] w-full
  
   overflow-hidden ${className}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Image Container with Fixed Height */}
  <div className="relative overflow-hidden">
    <img
      src={item.image || 'https://placehold.co/400x300/e2d1c3/white?text=Bánh+Cuốn+Tây+Hồ'}
      alt={item.name[language]}
      className={`food-card-image object-cover transition-all duration-500 ${isHovered ? 'scale-110' : ''} `}
      onClick={() => openLightbox(item.image)}
      width="600"
      height="400"
      
    />

    <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center">
      <img src={Media.logo} alt="Tây Hồ Logo" className="h-12 object-contain" />

      {item.category.name && (
        <Badge className={`text-xs text-white ${item.category.name.vi === "Món chay" ? "bg-banh-green" : "bg-red-400"}`}>
          {item.category.name.vi}
        </Badge>
      )}
    </div>
    
    {/* Floating Social Media Icons that appear on hover */}
    <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-center space-x-3 transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <button
        onClick={(e) => handleShareFacebook(item.id, e)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Chia sẻ lên Facebook"
      >
        <Facebook size={16} />
      </button>
      <button
        onClick={(e) => handleShareLinkedIn(item.id, e)}
        className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Chia sẻ lên LinkedIn"
      >
        <Linkedin size={16} />
      </button>
      <button
        onClick={(e) => handleCopyLink(item.id, e)}
        className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Sao chép liên kết"
      >
        <Copy size={16} />
      </button>
    </div>
  </div>

  {/* Content Container with Fixed Layout */}
  <div className="p-4 flex flex-col flex-grow">
    <div className="mb-2 h-14 overflow-hidden fade-in-left">
      <h3 className="text-xl font-semibold font-vietnam text-banhcuon-800 line-clamp-2">{item.name[language]}</h3>
    </div>
    
    {/* Description with fixed height and ellipsis */}
    <div className="block mb-3 h-12 overflow-hidden zoom-in ">
      <p className="text-sm text-muted-foreground line-clamp-2" >{item.description[language]}</p>
    </div>

    {/* Ingredients with fixed height */}
    <div className="mb-3 h-16 overflow-hidden zoom-in ">
      <h4  className="text-sm font-medium ">{t('menu.ingredients')}:</h4>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {item.ingredients[language]}
      </p>
    </div>

    {/* Push price and button to bottom with margin-top: auto */}
    <div className="mt-auto pt-2 flex items-center justify-between ">
      <div className="font-semibold text-primary">
        {formatPrice(item.price)} {t('menu.currency')}
      </div>
      <button 
        className="cta-button text-sm py-2 px-4 flex items-center gap-2"
        onClick={handleOrder}
      >
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