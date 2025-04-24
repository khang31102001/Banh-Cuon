import FoodCard from '@/components/FoodCard';
import { useLanguage } from '@/Contexts/LanguageContext';
import menuItems from '@/data/menuItems';
import React, { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { Search } from 'lucide-react';
import { getResizeHandleElementsForGroup } from 'react-resizable-panels';
import { Handle } from 'vaul';
import { set } from 'date-fns';

type Filter = 'all' | 'vegetarian' | 'non-vegetarian' | 'search';

const Menu: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState<string>("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleSearch = (value: string) => {
   setFilter("search");
   if(value !== "") return setSearch(value);
  //  console.log("search", search);
    setSearch("");
    setFilter("all");
  }

  const filteredItems = menuItems.filter((item) => {
   
    if (filter === 'all') return true;
    if (filter === 'vegetarian') return item.category.name.toLowerCase() === ("Món Chay").toLowerCase();
    if(filter === 'non-vegetarian') return item.category.name.toLowerCase() === ("Món Mặn").toLowerCase();
    if (filter === "search") {
      // console.log("search", search);
      const searchLower = search.toLowerCase();
      return (
        item.name.vi.toLowerCase().includes(searchLower) ||
        item.description.vi.toLowerCase().includes(searchLower)
      );
    }
    return true ;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-banhcuon-100 dark:bg-banhcuon-900 py-16 px-4 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="primary-heading">{t("menu.title")}</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t("menu.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="relative flex-grow w-full mb-6 ">
          <Search className="absolute left-3 top-4 h-6 w-5 cursor-pointer" />
          <input
            
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Tìm kiếm món ăn..."
            type="text"
          />
        </div>
        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setFilter("all")}
            >
              {t("common.all")}
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "vegetarian"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setFilter("vegetarian")}
            >
              {t("common.vegetarian")}
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                filter === "non-vegetarian"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setFilter("non-vegetarian")}
            >
              {t("common.nonVegetarian")}
            </button>
          </div>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} openLightbox={openLightbox} className="" />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No items found with the selected filter.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        image={currentImage}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default Menu;