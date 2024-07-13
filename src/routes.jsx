import Home from "./page/Home/Home";
import About from "./page/About/About";
import Services from "./page/Services/Services";
import Project from "./page/Project/Project";
import Articles from "./page/Articles/Articles";
import Contact from "./page/Contact/Contact";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/About" , element:<About/>},
    {path:"/Services" , element:<Services/>},
    {path:"/Project" , element:<Project/>},
    {path:"/Articles" , element:<Articles/>},
    {path:"/Contact" , element:<Contact/>},
]

export default routes;