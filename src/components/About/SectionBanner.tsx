import React from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface SectionBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  children?: React.ReactNode;
  className?: string;
}

const SectionBanner: React.FC<SectionBannerProps> = ({
  title,
  breadcrumbs,
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
  const breadcrumbClass = backgroundImage ? "text-white/80" : "";

  return (
    <header
      className={`py-24 ${backgroundImage ? "bg-banhcuon-900" : "bg-gradient-to-r from-banhcuon-50 to-leaf-50"} ${className} animate-on-scroll`}
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
