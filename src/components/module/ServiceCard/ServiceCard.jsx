import { Link } from "react-router-dom"


function ServiceCard() {
  return (
    <Link to='' className="block relative mb-8">
    <img src="/assets/images/s1.png" alt="services image" className="block w-full rounded-lg" />
    <div className="block absolute text-center bg-white w-[80%] h-24 mr-8 p-2 -bottom-8 rounded text-secondary z-50 delay-300  hover:text-white hover:bg-primary">
        <span className="block font-dana-bold text-2xl">توسعه دهنده وب</span>
        <span className="block text-base font-semibold">طراحی وب سایت</span>
    </div>
</Link>
  )
}

export default ServiceCard