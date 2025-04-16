
import React from 'react';
import { Loader } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';

const LoadingSpinner = () => {
//   const { t } = useLanguage();
  
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <Loader className="h-12 w-12 text-primary animate-spin" />
      <p className="mt-4 text-foreground font-medium">
        loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;