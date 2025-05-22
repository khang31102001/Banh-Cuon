import { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Frown, SmilePlus, Home, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [fruitPosition, setFruitPosition] = useState({ x: 50, y: 10 });
  const [isSad, setIsSad] = useState(true);
  const [bounce, setBounce] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiItems, setConfettiItems] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([]);
  const requestRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tạo hiệu ứng chuyển động của trái cây
  useEffect(() => {
    const direction: { x: number; y: number; } = { x: 1, y: 1 };
    const speed: {x: number; y:number;} = { x: 2, y: 2 };
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      setFruitPosition(prev => {
        const newX: number = prev.x + speed.x * direction.x;
        const newY: number = prev.y + speed.y * direction.y;
        
        // Kiểm tra va chạm
        if (newX < 0 || newX > 80) {
          direction.x *= -1;
          setIsSad(prev => !prev);
          setBounce(true);
          setTimeout(() => setBounce(false), 300);
        }
        if (newY < 0 || newY > 70) {
          direction.y *= -1;
          setIsSad(prev => !prev);
          setBounce(true);
          setTimeout(() => setBounce(false), 300);
        }
        
        return { x: newX, y: newY };
      });
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  // Xử lý hiệu ứng confetti khi click vào trái cây
  const handleFruitClick = () => {
    setShowConfetti(true);
    
    // Tạo các mảnh confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => {
      return {
        id: i,
        x: fruitPosition.x,
        y: fruitPosition.y,
        size: Math.random() * 10 + 5,
        color: getRandomColor()
      };
    });
    
    setConfettiItems(newConfetti);
    
    // Tạo hiệu ứng quay về mặt cười
    setIsSad(false);
    
    // Sau một thời gian, ẩn confetti
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };
  
  // Màu sắc ngẫu nhiên cho confetti
  const getRandomColor = () => {
    const colors = [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
      'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-blue-50 overflow-hidden relative"
      ref={containerRef}
    >
      {/* Background circles */}
      <div className="absolute w-64 h-64 rounded-full bg-primary/5 top-1/4 -right-32 blur-xl"></div>
      <div className="absolute w-80 h-80 rounded-full bg-red-100/30 -bottom-40 -left-20 blur-xl"></div>
      <div className="absolute w-40 h-40 rounded-full bg-yellow-100/40 top-20 left-10 blur-xl"></div>

      {/* Fruit character */}
      <div 
        className={`absolute cursor-pointer ${bounce ? 'animate-bounce-light' : ''}`}
        style={{ left: `${fruitPosition.x}%`, top: `${fruitPosition.y}%` }}
        onClick={handleFruitClick}
      >
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg width="80" height="80" viewBox="0 0 80 80" className="transform transition-transform hover:scale-110">
            <circle cx="40" cy="40" r="35" fill="#FF9F52" />
            {/* Leaf */}
            <path d="M40 10 C20 15, 30 25, 35 20" fill="#4ADE80" stroke="#2E7D32" strokeWidth="1" />
            {/* Eyes */}
            <circle cx="25" cy="35" r="5" fill="white" />
            <circle cx="55" cy="35" r="5" fill="white" />
            {isSad ? (
              <>
                <circle cx="25" cy="35" r="2.5" fill="#333" />
                <circle cx="55" cy="35" r="2.5" fill="#333" />
                {/* Sad mouth */}
                <path d="M25 55 Q40 45, 55 55" fill="none" stroke="#333" strokeWidth="2.5" />
              </>
            ) : (
              <>
                <circle cx="25" cy="35" r="2.5" fill="#333" />
                <circle cx="55" cy="35" r="2.5" fill="#333" />
                {/* Happy mouth */}
                <path d="M25 55 Q40 65, 55 55" fill="none" stroke="#333" strokeWidth="2.5" />
              </>
            )}
          </svg>
        </div>
      </div>
      
      {/* Confetti effect */}
      {showConfetti && confettiItems.map(item => (
        <div
          key={item.id}
          className={`absolute ${item.color} rounded-full animate-confetti opacity-70`}
          style={{
            left: `${item.x}%`, 
            top: `${item.y}%`,
            width: `${item.size}px`, 
            height: `${item.size}px`,
            animationDelay: `${Math.random() * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        ></div>
      ))}
      
      {/* Main content */}
      <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-8 w-full max-w-lg mx-4 z-10 animate-fade-in">
        <div className="flex items-center mb-6 gap-4">
          <div className="relative">
            <Frown className="h-12 w-12 text-red-500 animate-pulse-slow" />
            <SmilePlus className="h-12 w-12 text-green-500 animate-pulse-slow opacity-30 absolute top-0 left-0" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Ối! Trang không tồn tại
            </h1>
            <p className="text-lg text-muted-foreground">Lỗi 404 - Trang bạn tìm kiếm đã bị lạc hoặc không tồn tại</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-lg">
            Trái cây của chúng tôi đang cố gắng tìm trang của bạn, 
            nhưng có vẻ như nó không có ở đây. 
            <span className="font-semibold text-primary"> Hãy thử những gợi ý dưới đây:</span>
          </p>
          
          <ul className="space-y-2 ml-6 list-disc">
            <li className="text-gray-600">Kiểm tra lại đường dẫn URL</li>
            <li className="text-gray-600">Quay lại trang chủ và tìm kiếm sản phẩm bạn cần</li>
            <li className="text-gray-600">Thử nhấp vào trái cây nảy lên để nhận niềm vui bất ngờ</li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => navigate("/")}
            className="bg-primary hover:bg-primary/90 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
            <Home className="mr-2 h-4 w-4" />
        
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-primary/50 text-primary hover:text-primary/80 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Quay lại trang trước
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => window.location.reload()}
            className="group"
          >
            <RefreshCcw className="mr-2 h-4 w-4 transition-transform group-hover:rotate-180" />
            Tải lại trang
          </Button>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 animate-fade-in animate-delay-300 max-w-md">
        <p className="text-sm">
          <span className="font-semibold">Mẹo vui:</span> Hãy thử nhấp vào trái cây đang nảy trên trang!
        </p>
      </div>
    </div>
  );
}
