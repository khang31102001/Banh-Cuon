
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  lightText?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
  lightText = false,
}) => {
  const textColorClass = lightText ? "text-white" : "text-banhcuon-900";
  const subtitleColorClass = lightText ? "text-white/80" : "text-gray-600";

  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className} `}

    >
      <h2
        className={`group text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${textColorClass} font-roboto relative inline-block animate-[fade-in_1s_ease-out] opacity-0`}
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        {title}
        <span className="absolute -bottom-2 left-0 h-1 w-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtitleColorClass} max-w-3xl mx-auto mt-4 leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

