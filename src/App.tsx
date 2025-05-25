import { Suspense, useEffect } from "react";
import './app.css';
import { RouterProvider } from "react-router-dom";
import { preloadHome, router } from "./Routers";
import LoadingSpinner from "./components/LoadingSpinner";
import { ErrorBoundary } from 'react-error-boundary';


  function App() {
  // Đoạn kiểm tra version và reload nếu khác
  const checkAppVersion = () => {
    const currentVersion = document.querySelector("meta[name='app-version']")?.getAttribute("content");
    const localVersion = localStorage.getItem("app-version");

    if (localVersion && currentVersion && localVersion !== currentVersion) {
      console.log("Phiên bản mới đã được phát hành. Đang tải lại...");
      localStorage.setItem("app-version", currentVersion);
      window.location.reload(); // force reload để tải JS mới
    } else {
      localStorage.setItem("app-version", currentVersion || "");
    }
  };

  useEffect(() => {
    preloadHome();
    checkAppVersion();
  }, []);
  
  return (
    // Sử dụng Suspense để hiển thị fallback UI (Loading...) trong khi các component lazy load
    <ErrorBoundary fallback = {<div>Xin lỗi, có lỗi xảy ra. Vui lòng tải lại trang!.</div>}>
        <Suspense fallback={<LoadingSpinner />}>
        {/* RouterProvider nhận router đã được tạo từ createBrowserRouter */}
        <RouterProvider router={router} />
        </Suspense>
    </ErrorBoundary>
  );
}

// Xuất component App để sử dụng trong toàn bộ ứng dụng
export default App;
