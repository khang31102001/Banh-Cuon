import React, { useEffect, useState } from "react";
import { Phone, CornerDownLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Media } from "@/assets/Media";

const SocialSidebar = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="fixed right-0 bottom-0 z-50 flex flex-col space-y-4 p-4">
      {/* Phone Button */}
      <a
        href="tel:(028) 3820 0584"
        className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
        aria-label="Gọi điện"
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Phone className={`text-white ${isHover} ? animate-ring : ''`} size={22} />
        {/* Tooltip số điện thoại */}
        <div
          className="phone-tooltip absolute right-14 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          style={{
            width: isHover ? '140px' : '0px',
            padding: isHover ? '0.5rem 0.75rem' : '0.5rem 0',
            opacity: isHover ? 1 : 0,
            visibility: isHover ? 'visible' : 'hidden'
          }}
        >
          <div className="flex items-center justify-center flex-grow"> 
            <Phone size={14} className="text-yellow-500 mr-2" />
            <span className="text-gray-700 text-sm whitespace-nowrap font-medium">
              (028) 3820 0584
            </span>
          </div>
        </div>
      </a>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/0777749669"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Zalo"
      >
        <img
          src={Media.iconn_zalo}
          alt="Zalo"
          className="w-10 h-10"
        />
      </a>

      {/* Messenger Button */}
      <a
        href="https://www.facebook.com/banhcuontayho127"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
        aria-label="Messenger"
      >
        <img
          src={Media.icon_message}
          alt="Messenger"
          className="w-8 h-8"
        />
      </a>


      {/* Back to top Button */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110"
        aria-label="Về đầu trang"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </div>
  );
};

export default SocialSidebar;
