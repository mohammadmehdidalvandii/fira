import Navbar from "./components/module/Navbar/Navbar"
import { useRoutes } from "react-router-dom"
import routes from "./routes"
import ScrollToTop from "./utils/ScrollToTop"
import Footer from "./components/module/Footer/Footer"

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Navbar/>
      {router}
      <ScrollToTop/>
      <Footer/>
    </>
  )
}

export default App