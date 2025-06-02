import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X, SkipBack, SkipForward } from 'lucide-react';

// Mock translation function
const useLanguage = () => ({
  t: (key) => {
    const translations = {
      'home.processTitle': 'Quy Trình Sản Xuất',
      'home.videoTitle1': 'Khám Phá',
      'home.videoTitle2': 'Quy Trình Của Chúng Tôi',
      'home.videoSubtitle': 'Công nghệ hiện đại, chất lượng vượt trội',
      'home.videoDescription': 'Với hơn 20 năm kinh nghiệm, chúng tôi tự hào mang đến quy trình sản xuất khép kín, đảm bảo chất lượng cao nhất cho sản phẩm.'
    };
    return translations[key] || key;
  }
});

const SectionTitle = ({ title1, title2, subtitle, className }) => (
  <div className={className}>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      <span className="text-gray-600">{title1}</span>
      <br />
      <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
        {title2}
      </span>
    </h2>
    <p className="text-xl text-gray-600 font-light">{subtitle}</p>
  </div>
);

const Video = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const handlePlayVideo = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }, 300);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      setIsMuted(newMuted);
      videoRef.current.volume = newMuted ? 0 : volume;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isVideoPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const closeVideo = () => {
    setIsPlaying(false);
    setIsVideoPlaying(false);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(videoRef.current.currentTime + 10, duration);
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(videoRef.current.currentTime - 10, 0);
    }
  };

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'Escape':
          closeVideo();
          break;
        case 'ArrowLeft':
          skipBackward();
          break;
        case 'ArrowRight':
          skipForward();
          break;
        case 'm':
        case 'M':
          toggleMute();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isVideoPlaying]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-400/30 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Video Section */}
          <div className="relative order-2 lg:order-1">
            <div 
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="relative group cursor-pointer"
            >
              {/* Main video container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-[24rem] md:h-[28rem] lg:h-[32rem] transform transition-all duration-700 hover:scale-[1.02] hover:shadow-3xl border border-gray-200/20">
                
                {/* Video preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+Cjwvc3ZnPgo=')] opacity-30"></div>
                </div>
                
                {/* Gradient overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-all duration-500"></div>
                
                {/* Enhanced play button overlay */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-all duration-700 transform ${
                  isHover ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-95 scale-95"
                }`}>
                  
                  {/* Process title with animation */}
                  <div className="text-center mb-8 px-4 transform transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 drop-shadow-2xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      {t("home.processTitle")}
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto rounded-full transform transition-all duration-500 group-hover:w-24"></div>
                  </div>
                  
                  {/* Enhanced play button */}
                  <button
                    onClick={handlePlayVideo}
                    disabled={isLoading}
                    className="relative w-24 h-24 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-2xl flex items-center justify-center transition-all duration-500 hover:from-red-600 hover:via-red-700 hover:to-red-600 hover:scale-125 hover:shadow-red-500/40 disabled:opacity-50 group/btn transform hover:rotate-3"
                    aria-label="Play video"
                  >
                    {/* Multiple glow effects */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover/btn:opacity-40 blur-2xl transition-all duration-500 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover/btn:opacity-100 blur-xl transition-all duration-300"></div>
                    
                    {isLoading ? (
                      <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Play className="h-11 w-11 text-white ml-1 drop-shadow-2xl transform transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:drop-shadow-xl" />
                    )}
                    
                    {/* Multiple pulse animations */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-red-300/60 animate-pulse"></div>
                  </button>
                  
                  {/* Enhanced hint text */}
                  <div className="mt-8 text-center">
                    <p className="text-base text-white/90 font-semibold tracking-wider uppercase mb-1 drop-shadow-lg">
                      Nhấn để xem video
                    </p>
                    <p className="text-sm text-white/70 font-light">
                      Trải nghiệm chất lượng Full HD
                    </p>
                  </div>
                </div>
                
                {/* Enhanced corner decorations */}
                <div className="absolute top-6 left-6 w-10 h-10 border-l-3 border-t-3 border-white/40 rounded-tl-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-6 right-6 w-10 h-10 border-r-3 border-t-3 border-white/40 rounded-tr-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-10 h-10 border-l-3 border-b-3 border-white/40 rounded-bl-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 right-6 w-10 h-10 border-r-3 border-b-3 border-white/40 rounded-br-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Video quality badge */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/20">
                  HD Quality
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <SectionTitle
                title1={t('home.videoTitle1')}
                title2={t('home.videoTitle2')}
                subtitle={t('home.videoSubtitle')}
                className="text-left"
              />
              
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  {t('home.videoDescription')}
                </p>
                
                {/* Enhanced feature highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: "🏭", text: "Quy trình khép kín", color: "from-blue-500/10 to-blue-600/10 border-blue-200" },
                    { icon: "✨", text: "Chất lượng cao", color: "from-yellow-500/10 to-yellow-600/10 border-yellow-200" },
                    { icon: "🛡️", text: "An toàn vệ sinh", color: "from-green-500/10 to-green-600/10 border-green-200" },
                    { icon: "⏰", text: "20+ năm kinh nghiệm", color: "from-purple-500/10 to-purple-600/10 border-purple-200" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${item.color} rounded-xl backdrop-blur-sm border hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}>
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube-style Fullscreen Video Modal */}
      {isPlaying && (
        <div 
          ref={containerRef}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-in fade-in duration-300"
          onMouseMove={handleMouseMove}
        >
          {/* Video container */}
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              className="w-full h-full object-contain"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsVideoPlaying(false)}
              onClick={togglePlayPause}
            />
            
            {/* YouTube-style Controls */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 transition-all duration-300 ${
              showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              
              {/* Progress bar */}
              <div className="mb-4">
                <div 
                  className="w-full h-1 bg-white/30 rounded-full cursor-pointer hover:h-2 transition-all duration-200"
                  onClick={handleSeek}
                >
                  <div 
                    className="h-full bg-red-600 rounded-full relative"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </div>

              {/* Control buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlayPause}
                    className="text-white hover:text-red-400 transition-colors duration-200"
                  >
                    {isVideoPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </button>

                  {/* Skip buttons */}
                  <button
                    onClick={skipBackward}
                    className="text-white hover:text-red-400 transition-colors duration-200"
                  >
                    <SkipBack className="h-6 w-6" />
                  </button>
                  
                  <button
                    onClick={skipForward}
                    className="text-white hover:text-red-400 transition-colors duration-200"
                  >
                    <SkipForward className="h-6 w-6" />
                  </button>

                  {/* Volume */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-red-400 transition-colors duration-200"
                    >
                      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>

                  {/* Time display */}
                  <div className="text-white text-sm font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                {/* Right side controls */}
                <div className="flex items-center space-x-4">
                  {/* Video title */}
                  <div className="text-white text-lg font-semibold">
                    {t("home.processTitle")}
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={closeVideo}
                    className="text-white hover:text-red-400 bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all duration-200 hover:scale-110"
                    aria-label="Close video"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Center play/pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className={`bg-black/60 rounded-full p-4 transition-all duration-300 ${
                showControls ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}>
                {isVideoPlaying ? <Pause className="h-12 w-12 text-white" /> : <Play className="h-12 w-12 text-white" />}
              </div>
            </div>

            {/* Keyboard shortcuts hint */}
            <div className={`absolute top-4 left-4 text-white/70 text-sm transition-all duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}>
              <div>Space: Play/Pause • ←→: Skip • M: Mute • ESC: Close</div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Video;