import Banner from "../../components/template/home/Banner/Banner"
import Digital from "../../components/template/home/Digital/Digital"
import Experience from "../../components/template/home/Experience/Experience"
import Features from "../../components/template/home/Features/Features"
import Services from "../../components/template/home/Services/Services"
import Tab from "../../components/template/home/Tab/Tab"
import Team from "../../components/template/home/Team/Team"
import Technology from "../../components/template/home/Technology/Technology"

function Home() {
  return (
   <>
    <Banner/>
    <Features/>
    <Technology/>
    <Digital/>
    <Services/>
    <Experience/>
    <Tab/>
    <Team/>
    <br /><br /><br /><br /><br /><br />
   </>
  )
}

export default Home