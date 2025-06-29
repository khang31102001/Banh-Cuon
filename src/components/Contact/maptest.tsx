import { useLocation } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { useEffect, useState } from "react";

const Map = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [showDirections, setShowDirections] = useState(false);

    // Store information
    const storeInfo = {
        name: "Bánh Cuốn Tây Hồ",
        address: "127 Đinh Tên Hoàng ",
        phone: "+84 28 38200 584",
        hours: "5:30 - 21:30 (Hàng ngày)",
        coordinates: {
            lat: 21.0758,
            lng: 105.8196
        }
    };

    useEffect(() => {
        if (location.hash === '#map') {
            setTimeout(() => {
                const scrollMap = document.getElementById(location.hash.substring(1));
                if (scrollMap) {
                    scrollMap.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 100);
        }
    }, [location]);

    const handleMapLoad = () => {
        setIsLoading(false);
    };

    const handleGetDirections = () => {
        const { lat, lng } = storeInfo.coordinates;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
        window.open(directionsUrl, '_blank');
    };

    const handleCallStore = () => {
        window.location.href = `tel:${storeInfo.phone}`;
    };

    const transportOptions = [
        {
            icon: "🚗",
            title: "Ô tô",
            description: "Có chỗ đậu xe thuận tiện",
            time: "15-20 phút từ trung tâm"
        },
        {
            icon: "🏍️",
            title: "Xe máy",
            description: "Dễ dàng di chuyển và đậu xe",
            time: "10-15 phút từ trung tâm"
        },
        {
            icon: "🚌",
            title: "Xe bus",
            description: "Tuyến 14, 31 - Dừng gần cửa hàng",
            time: "20-30 phút"
        },
        {
            icon: "🚶",
            title: "Đi bộ",
            description: "Từ hồ Tây chỉ 5 phút đi bộ",
            time: "5 phút từ hồ Tây"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white">
            {/* Map Section */}
            <div id="map" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-40">
                <SectionTitle
                    title3="Vị Trí Cửa Hàng"
                    subtitle="Ghé thăm cửa hàng Bánh Cuốn Tây Hồ ở Hà Nội ngay hôm nay"
                    lightText={true}
                />

                {/* Store Info Cards */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                 
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start space-x-4">
                            <div className="bg-red-100 p-3 rounded-xl">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-2">Địa chỉ cửa hàng</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{storeInfo.address}</p>
                                <button 
                                    onClick={handleGetDirections}
                                    className="mt-3 text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center group"
                                >
                                    Chỉ đường
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                  
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-xl">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-2">Liên hệ</h3>
                                <p className="text-gray-600 text-sm mb-1">{storeInfo.phone}</p>
                                <p className="text-gray-500 text-sm">{storeInfo.hours}</p>
                                <button 
                                    onClick={handleCallStore}
                                    className="mt-3 text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center group"
                                >
                                    Gọi ngay
                                    <svg className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                  
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-2">Giờ mở cửa</h3>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Thứ 2 - Chủ nhật</span>
                                        <span className="text-gray-900 font-medium">7:00 - 22:00</span>
                                    </div>
                                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        • Đang mở cửa
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Map Container */}
                <div className="relative">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                        {/* Map Header */}
                        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-bold text-lg">{storeInfo.name}</h3>
                                    <p className="text-red-100 text-sm">{storeInfo.address}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={handleGetDirections}
                                        className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center space-x-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                        <span>Chỉ đường</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Map Loading State */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                                    <p className="text-gray-600">Đang tải bản đồ...</p>
                                </div>
                            </div>
                        )}

                        {/* Google Maps Iframe */}
                        <div className="h-[500px] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62708.30243143446!2d106.696954!3d10.790705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752900177c2639%3A0x633e01835ec7db4b!2zQsOhbmggQ3Xhu5FuIFTDonkgSOG7kyAxMjc!5e0!3m2!1sen!2s!4v1744280122489!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vị trí Bánh Cuốn Tây Hồ"
                                onLoad={handleMapLoad}
                            />
                        </div>
                    </div>
                </div>

                {/* Transportation Options */}
                <div className="mt-12">
                   
                    <SectionTitle
                        title3="Phương tiện di chuyển"
                        subtitle="Dễ dàng đến cửa hàng Bánh Cuốn Tây Hồ bằng nhiều phương tiện khác nhau"
                        lightText={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {transportOptions.map((option, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{option.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{option.title}</h4>
                                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{option.description}</p>
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <span className="text-xs font-medium text-gray-700">{option.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Lưu ý khi đến cửa hàng
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    Chỗ đậu xe rộng rãi, thuận tiện
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    Có thể đặt bàn trước qua điện thoại
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    Nhận order mang về và giao tận nơi
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                    Không gian thoáng mát, phù hợp gia đình
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                Địa điểm lân cận
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    Hồ Tây - 200m (3 phút đi bộ)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    Chùa Trấn Quốc - 500m (7 phút đi bộ)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    Bảo tàng Hồ Chí Minh - 1.5km
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                    Lăng Chủ tích Hồ Chí Minh - 2km
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;