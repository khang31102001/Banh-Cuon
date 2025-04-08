import menuItems from "@/data/menuItems";
import FoodCard from "../FoodCard";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { ArrowRight } from "lucide-react";

const ProductBestSale = () => {
    const Menu = menuItems.slice(0, 8);

    return (
        <div className="container mx-auto p-4 my-12">
         
            <div className="text-center mb-6">
                <SectionTitle title="Món ăn Best Sale"
                subtitle=" Đặt món ngay hôm nay hoặc truy cập vào trang Thực đơn để xem đầy đủ các lựa chọn hấp dẫn – chỉ một cú click là mang cả Hà Nội về bàn ăn của bạn!" 
                lightText = {false} />
               
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