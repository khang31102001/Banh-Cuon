import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`lightbox ${isOpen ? 'active' : ''}`}
      onClick={onClose}
    >
        <div className="relative">
          <button
          className="absolute top-4 z-50 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X size={24} />
        </button>
        <img
          src={image || 'https://placehold.co/800x600/e2d1c3/white?text=Bánh+Cuốn+Tây+Hồ'}
          alt="Enlarged food"
          className="lightbox-image"
          onClick={(e) => e.stopPropagation()}
        />

        </div>
     
    </div>
  );
};

export default Lightbox;
