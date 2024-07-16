import { Link } from "react-router-dom"


function ServiceCard({id , image , title , subtitle}) {
  return (
    <Link to={`/Services-D/${id}`} className="block relative mb-8">
    <img src={image} alt="services image" className="block w-full rounded-lg" />
    <div className="block absolute text-center bg-white w-[80%] h-24 mr-8 p-2 -bottom-8 rounded text-secondary z-50 ease-linear duration-300  hover:text-white hover:bg-primary">
        <span className="block font-dana-bold text-2xl">{title}</span>
        <span className="block text-base font-semibold">{subtitle}</span>
    </div>
</Link>
  )
}

export default ServiceCard