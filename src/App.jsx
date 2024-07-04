import Navbar from "./components/module/Navbar/Navbar"
import { useRoutes } from "react-router-dom"
import routes from "./routes"

function App() {
  const router = useRoutes(routes)
  return (
    <>
      <Navbar/>
      {router}
    </>
  )
}

export default App