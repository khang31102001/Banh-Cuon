import { Suspense, useEffect } from "react";
import './app.css';
import { RouterProvider } from "react-router-dom";
import { preloadHome, router } from "./Routers";
import LoadingSpinner from "./components/LoadingSpinner";


function App() {
  useEffect(() => {
    preloadHome();
  }, [])
  return (
    // Sử dụng Suspense để hiển thị fallback UI (Loading...) trong khi các component lazy load
    <Suspense fallback={<LoadingSpinner />}>
      {/* RouterProvider nhận router đã được tạo từ createBrowserRouter */}
      <RouterProvider router={router} />
    </Suspense>
  );
}

// Xuất component App để sử dụng trong toàn bộ ứng dụng
export default App;
