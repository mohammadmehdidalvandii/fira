import Home from "./page/Home/Home";
import About from "./page/About/About";
import Services from "./page/Services/Services";
import Project from "./page/Project/Project";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/About" , element:<About/>},
    {path:"/Services" , element:<Services/>},
    {path:"/Project" , element:<Project/>},
]

export default routes;