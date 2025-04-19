import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const FoodGallery = () => {
    const foodImages = [
        '/images/banh-cuon-thit.jpg',
        '/images/banh-cuon-tom.jpg',
        '/images/banh-cuon-chay.jpg',
        '/images/banh-cuon-nam.jpg',
        '/images/banh-cuon-trung.jpg',
        '/images/banh-cuon-ga.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === foodImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? foodImages.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Food Gallery Carousel */}
            <section className="py-12 bg-banhcuon-50 dark:bg-banhcuon-950">
                <div className="container mx-auto px-4">
                    <h2 className="primary-heading text-center mb-8">Menu</h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="overflow-hidden rounded-xl shadow-xl h-[300px] md:h-[400px]">
                            <img
                                src={foodImages[currentImageIndex]}
                                alt={`Bánh Cuốn Tây Hồ variety ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-105"
                                onError={(e) => {
                                    console.error(`Food image ${currentImageIndex} failed to load`, e);
                                    e.currentTarget.src = "https://placehold.co/800x600/e2d1c3/white?text=Bánh+Cuốn";
                                }}
                            />
                        </div>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-all"
                        >
                            <ChevronLeft className="h-6 w-6 text-primary" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md hover:bg-white transition-all"
                        >
                            <ChevronRight className="h-6 w-6 text-primary" />
                        </button>

                        <div className="mt-4 flex justify-center gap-2">
                            {foodImages.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FoodGallery;