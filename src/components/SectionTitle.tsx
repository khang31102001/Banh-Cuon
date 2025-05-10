
import React from "react";

interface SectionTitleProps {
  title1: string;
  title2?: string;
  title3?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  underline?: boolean;
  lightText?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title1,
  title2,
  title3,
  subtitle,
  centered = true,
  className = "",
  lightText = false,
  underline = false
}) => {
  const textColorClass1 = lightText ? "text-black" : "text-banhcuon-700";
  const textColorClass2 = lightText ? "text-banh-green" : "text-black";
  const textColorClass3 = lightText ? "text-black" : "text-black";
  const subtitleColorClass = lightText ? "text-gray-600" : "text-black/90";

  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className} `}
    >
      <h2
        className={`group text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textColorClass1} font-vietnam relative inline-block animate-[fade-in_1s_ease-out] opacity-0`}
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        {title1} <span className={`${textColorClass2}`}>{title2}</span>  <span className={`${textColorClass3}`}>{title3}</span>
        {title1 !== '' && title2 !=='' && !!underline && (<span className="absolute -bottom-2 left-0 h-1 w-full bg-banh-green rounded-full "></span>)}
      </h2>
      {subtitle && (
        <p className={`text-lg font-quicksand md:text-xl ${subtitleColorClass} max-w-3xl mx-auto mt-4 leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

