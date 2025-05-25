import React from "react";

interface SectionBannerProps {
  title: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  backgroundImage,
  children,
  className = "",
}) => {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }
    : {};

  const textColorClass = backgroundImage ? "text-white" : "text-banhcuon-900";
 

  return (
    <header
      className={`py-[21rem] ${backgroundImage ? "bg-banhcuon-400" : "bg-gradient-to-r from-banhcuon-50 to-leaf-50"} ${className} fade-in-up`}
      style={bgStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${textColorClass} font-serif`}
        >
          {title}
        </h1>
         
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
};

export default SectionBanner;
