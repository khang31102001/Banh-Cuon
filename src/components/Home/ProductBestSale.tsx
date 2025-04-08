import menuItems from "@/data/menuItems";
import FoodCard from "../FoodCard";
import { Link } from "react-router-dom";

const ProductBestSale = () => {
    const Menu = menuItems;

    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Món ăn best sale</h1>
                <span className="text-gray-600">Khám phá những món ăn ngon mỗi ngày</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Menu.map((items, index) => {
                    return (
                        <Link to="/menu">
                           <FoodCard key={index} item={items} />
                        </Link>
                      
                    );
                })}
                
            </div>
        </div>
    );
}

export default ProductBestSale;