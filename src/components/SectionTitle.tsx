
import React from "react";

interface SectionTitleProps {
  title1?: string;
  title2?: string;
  title3?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lightText?: boolean;
  subtitleColorClass?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title1,
  title2,
  title3,
  subtitle,
  centered = true,
  className = "",
  lightText = false,
  subtitleColorClass = "",
}) => {
  const textColorClass1 = lightText ? "text-green-900" : "text-[#F4A259]";
  const textColorClass2 = lightText ? "text-red-800" : "text-black";
  const textColorClass3 = lightText ? "text-gray-900" : "text-white";

  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className} `}
    >
      <h2
        className={`group text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textColorClass1} font-anton relative inline-block animate-[fade-in_1s_ease-out] opacity-0`}
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        {title1} <span className={`${textColorClass2}`}>{title2}</span>  <span className={`${textColorClass3}`}>{title3}</span>
      </h2>
      {subtitle && (
        <p className={`text-[1.2rem]  md:text-xl ${subtitleColorClass} max-w-3xl mx-auto mt-4 leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

