import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/Views/NotFound";


// lazy() giúp tối ưu hiệu suất bằng cách tải component khi cần.
const MainLayout = lazy(()=> import('../Views/shared/Layout'));
const Home = lazy(()=> import('../Views/Home'));
const Menu = lazy(()=> import('../Views/Menu'));
const Contact = lazy(()=> import('../Views/Contact'));
const Recruitment = lazy(()=> import('../Views/Recruitment'));
const About = lazy(()=> import('../Views/About'));

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
