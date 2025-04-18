// Import thư viện React để sử dụng Suspense cho Lazy Loading
import { Suspense } from "react";

// Import RouterProvider từ react-router-dom để quản lý router
import { RouterProvider } from "react-router-dom";

// Import router từ thư mục Routers/index, nơi định nghĩa tất cả các route
import router from "./Routers";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  return (
    // Sử dụng Suspense để hiển thị fallback UI (Loading...) trong khi các component lazy load
    <Suspense fallback={<LoadingSpinner/>}>
      {/* RouterProvider nhận router đã được tạo từ createBrowserRouter */}
      <RouterProvider router={router} />
    </Suspense>
  );
}

// Xuất component App để sử dụng trong toàn bộ ứng dụng
export default App;
