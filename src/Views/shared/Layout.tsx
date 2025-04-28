import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SocialSidebar from "@/components/Layout/SocialSidebar";

const setupSrollAnimated = () => {
  const element = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right, .fade-in-down, .animation-element, .flip-in, .zoom-in");
  const observer = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        const children = entry.target.querySelectorAll('.staggered-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            (child as HTMLElement).style.opacity = '1';
            (child as HTMLElement).style.transform = 'translateY(0)';
          }, 150 * index);
        });
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -100px 0px" })
  );

  element.forEach((el) => observer.observe(el));
};


const Layout = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {

    window.scroll(0, 0);
    setupSrollAnimated();
  
    
    const observer = new MutationObserver(() => {
      setupSrollAnimated();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="hidden sm:block lg:block">
       <SocialSidebar/>
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
