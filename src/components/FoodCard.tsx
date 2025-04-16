import React, { useState } from 'react';
import  { type MenuItem } from '../data/menuItems';
import { Badge } from './ui/badge';
import { useLanguage } from '@/Contexts/LanguageContext';
import { Media } from '@/assets/Media';
import { toast } from 'sonner';
import { Copy, Facebook, Linkedin } from 'lucide-react';

interface FoodCardProps {
  item?: MenuItem;
  openLightbox?: (image: string) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ item, openLightbox }) => {
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
      className="food-card group bg-white dark:bg-card transition-all duration-300 hover:translate-y-[-5px] 
      fade-in-up h-full flex flex-col w-full min-w-[300px] max-w-[90vw] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-lg min-w-[220px] max-w-[90vw] h-auto">
        <img
          src={item.image || 'https://placehold.co/400x300/e2d1c3/white?text=Bánh+Cuốn+Tây+Hồ'}
          alt={item.name[language]}
          className={`food-card-image object-cover w-full h-full transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}
          onClick={() => openLightbox(item.image)}
        />

        <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center">
          <img src={Media.logo} alt="Tây Hồ Logo" className="h-12 object-contain" />

          {/* {item.category.name && (
            <Badge className="bg-green-500 text-white hover:bg-green-600">
              {item.category.name}
            </Badge>
          )} */}

          {item.category.name && (
            <Badge className= {`text-xs text-white ${item.category.name === "Món Chay" ? "bg-green-500" : "bg-red-400"} `}>
              {item.category.name}
            </Badge>
          )}
        </div>
        {/* Floating Social Media Icons that appear on hover */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex justify-center space-x-3 transform transition-all duration-300 ${isHovered  ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
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

      <div className="p-4 space-y-3">
        <div className=" w-full">
          <h3 className="text-xl font-semibold font-poppins text-banhcuon-800">{item.name[language]}</h3>
        </div>
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
          <button className="cta-button text-sm py-2 px-4 flex items-center gap-2"
          onClick={handleOrder}>
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