import { useLanguage } from '@/Contexts/LanguageContext';
import menuItems from '@/data/menuItems';
import React, { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import { Search } from 'lucide-react';
import SectionBanner from '@/components/SectionBanner';
import { Media } from '@/assets/Media';
import ProductList from '@/components/Menu/ProductList';
import SearchFilter from '@/components/Menu/SearchFilter';
import { normalizeJapanese, removeVietnameseTones } from '@/Utils/utils';
import Fuse from 'fuse.js'

type Filter = 'all' | 'vegetarian' | 'non-vegetarian' | 'search';

const Menu: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState<string>("");
  // const fuse = new Fuse(menuItems, {
  //   keys: ['name.jp', 'name.vi', 'name.en', 'description.vi'],
  //   threshold: 0.3
  // })

  const handelFilter = (filter: Filter, searchText?: string) => {
     setFilter(filter ?? "all");
     setSearch(searchText ?? "")
  }

 
const filteredItems = menuItems.filter((item) => {
  if (filter === 'all') return true;

  if (filter === 'vegetarian') {
    return item.category.name.vi.toLowerCase() === "món chay";
  }

  if (filter === 'non-vegetarian') {
    return item.category.name.vi.toLowerCase() === "món mặn";
  }

  if (filter === 'search') {
    const searchVI = removeVietnameseTones(search.toLowerCase().trim());
    const searchEN = search.toLowerCase().trim();
    const searchJP = normalizeJapanese(search);

    return (
      // Tìm tiếng Việt (bỏ dấu)
      removeVietnameseTones(item.name.vi.toLowerCase()).includes(searchVI) ||
      removeVietnameseTones(item.description.vi.toLowerCase()).includes(searchVI) ||

      // Tìm tiếng Anh
      item.name.en.toLowerCase().includes(searchEN) ||

      // Tìm tiếng Nhật
      normalizeJapanese(item.name.jp) === searchJP
    );
  }

  return true;
});
  // console.log("check filter", filteredItems.length);
  return (
    <div className="min-h-screen">
   
      <SectionBanner 
      title={t("menu.title")}
      backgroundImage={Media.banner_menu}
       className="h-[600px]"
      >
       
         <p className="text-neutral-200 text-lg md:text-xl mt-2 drop-shadow-sm tracking-wide">
            Tìm hiểu thực đơn đa dạng của chúng tôi, từ món chay thanh đạm đến món mặn
        </p>
      </SectionBanner>


      <div className="container mx-auto px-4 py-12">
       
       <SearchFilter onChangeFilter={handelFilter}/>

        {/* Food Grid */}
        <ProductList data={filteredItems}/>

      
      </div>
     
    </div>
  );
};

export default Menu;