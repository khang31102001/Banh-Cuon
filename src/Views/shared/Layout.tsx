import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

// import { LayoutFooter } from "@/components/Layout/Footer";
// import { LayoutHeader } from "@/components/Layout/Header";

const Layout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />

      </main>
      <Footer />
    </div>
  );
}
export default Layout;
