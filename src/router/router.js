import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home Page/Home";
import DivineTravels from '../pages/Details/DivineTravels/DivineTravels.jsx';
import DeveloperQnA from '../pages/Details/DeveloperQnA/DeveloperQnA.jsx';
import GlobalNews from '../pages/Details/GlobalNews/GlobalNews.jsx';

//import Lottie Animation
import Error from "../assets/animation/Error404.json";
import Lottie from "lottie-react";
import { Button } from "react-bootstrap";

const router = createBrowserRouter([
     {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/details/divine-travels',
                element:<DivineTravels></DivineTravels>
            },
            {
                path:"/details/developer-qna",
                element: <DeveloperQnA></DeveloperQnA>
            },
            {
                path:'/details/global-news',
                element:<GlobalNews></GlobalNews>
            }
        ]
     },
     {
        path:'*',
        element: <div className="w-75 text-center"><Lottie animationData={Error}></Lottie> <a href="/"><Button className="button p-3">Let's Back to Home Page</Button></a></div>
     }
])

export default router;