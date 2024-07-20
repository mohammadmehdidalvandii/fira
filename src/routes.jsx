import Home from "./page/Home/Home";
import About from "./page/About/About";
import Services from "./page/Services/Services";
import ServicesDetails from "./page/ServicesDetails/ServicesDetails";
import Project from "./page/Project/Project";
import ProjectDetails from "./page/ProjectDetails/ProjectDetails";
import Articles from "./page/Articles/Articles";
import ArticleDetails from "./page/ArticleDetails/ArticleDetails";
import Contact from "./page/Contact/Contact";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Admin from "./page/Admin/Admin";
import User from "./page/User/User";

const routes = [
    {path:"/" , element:<Home/>},
    {path:"/About" , element:<About/>},
    {path:"/Services" , element:<Services/>},
    {path:"/Services-D/:id" , element:<ServicesDetails/>},
    {path:"/Project" , element:<Project/>},
    {path:"/Project-D" , element:<ProjectDetails/>},
    {path:"/Articles" , element:<Articles/>},
    {path:"/Article-D" , element:<ArticleDetails/>},
    {path:"/Contact" , element:<Contact/>},
    {path:"/Login" , element:<Login/>},
    {path:"/Register" , element:<Register/>},
    {path:"/Admin" , element:<Admin/>},
    {path:"/User" , element:<User/>},
]

export default routes;