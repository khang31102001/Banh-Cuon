import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/Views/NotFound";

const loadWithRetry = <T extends { default: unknown }>(importFunc: () => Promise<T>, retries = 3): Promise<T> => {
    return new Promise((resolve, reject) => {
      const attempt = (n: number) => {
        importFunc()
          .then(resolve)
          .catch((error) => {
            if (n === 1) {
              reject(error);
              return;
            }
            setTimeout(() => attempt(n - 1), 1000);
          });
      };
      attempt(retries);
    });
  };
  

// lazy() giúp tối ưu hiệu suất bằng cách tải component khi cần.
// loadWithRetry() ngăn ngừa lỗi khi deploy update version new
const MainLayout = lazy(()=> loadWithRetry(()=> import('@/Views/shared/Layout')));
const Home = lazy(() => loadWithRetry(() => import('@/Views/Home')));
const Menu = lazy(() => loadWithRetry(() => import('@/Views/Menu')));
const Contact = lazy(() => loadWithRetry(() => import('@/Views/Contact')));
const Recruitment = lazy(() => loadWithRetry(() => import('@/Views/Recruitment')));
const About = lazy(() => loadWithRetry(() => import('@/Views/About')));

const preloadHome = () => import('@/Views/Home');
const preloadMenu = ()=> import('@/Views/Menu');
const preloadContact = () => import('@/Views/Contact');
const preloadRecruitment = ()=> import('@/Views/Recruitment');
const preloadAbout = ()=> import('@/Views/About');

 
const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {path: '/', element: <Home/>},
            {path: '/menu', element: <Menu/>},
            {path: '/about', element: <About/>},
            {path: '/contact', element: <Contact/>},
            {path: 'recruitment', element: <Recruitment/>},
            {
                path:'*', element: <NotFound/>
            }
        ]  
    },
    
]);

export {
    router,
    preloadHome,
    preloadMenu,
    preloadContact,
    preloadRecruitment,
    preloadAbout
};
