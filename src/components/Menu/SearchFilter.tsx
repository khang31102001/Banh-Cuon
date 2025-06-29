import { useLanguage } from "@/Contexts/LanguageContext"
import { Search } from "lucide-react"
import { useState } from "react";

type Filter = 'all' | 'vegetarian' | 'non-vegetarian' | 'search';
interface Props {
    onChangeFilter: (
        filter: Filter,
        searchText?: string
    ) => void
}
const SearchFilter = ({ onChangeFilter }: Props) => {
    const { t } = useLanguage();
    const filter = [
        { id: 1, value: 'all', label: t('common.all') },
        { id: 2, value: 'vegetarian', label: t('common.vegetarian') },
        { id: 3, value: 'non-vegetarian', label: t('common.nonVegetarian') },
    ]
    const [search, setSearch] = useState<string>("");
    const [activeFilter, setActiveFilter] = useState<Filter>("all");
    const handleSearch = () => {  
        if (search.trim() !== "") {
            setActiveFilter("all");
            return onChangeFilter('search', search)
        }
        setSearch("");
        onChangeFilter("all");
    }
    console.log("search", search);
    return (
        <div>
            <div className="relative flex-grow w-full mb-6 bg-white ">
                <button 
                onClick={()=> handleSearch()}
                className="absolute left-3 top-4 transform transition-all duration-3000 ease-in-out hover:scale-110 hover:text-primary cursor-pointer">
                     <Search  className="top-4 h-6 w-5" />
                </button>
                
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e)=>{
                       if(e.key === 'Enter') handleSearch()
                    }}
                    
                    className="w-full pl-10 pr-4 py-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tìm kiếm món ăn..."
                    type="text"
                />
            </div>
            {/* Filter Controls */}
            <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-4">
                    {filter.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-md font-medium transition-all ${activeFilter === item.value
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    }`}
                                onClick={() => {
                                    setActiveFilter(item.value as Filter)
                                    onChangeFilter(item.value as Filter)
                                    setSearch("");
                                }}
                            >
                                {item.label}
                            </button>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default SearchFilter