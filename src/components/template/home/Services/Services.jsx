import { useEffect, useState } from "react";
import ServiceCard from "../../../module/ServiceCard/ServiceCard"

function Services() {
  const [itemServices , setItemServices] = useState([]);
  useEffect(()=>{
      const fetchData = async() =>{
        const res = await fetch("http://localhost:3000/services");
        const data = await res.json();
        setItemServices(data);
      }
      fetchData();
  },[])
  return (
    <section className="block w-full mt-12 bg-success py-8">
        <div className="container">
            <div className="block text-center">
                <h3 className="block font-dana-bold text-4xl text-secondary">خدمات <span className="text-primary">آژانس ما</span></h3>
                <p className="block text-center mx-auto mt-6 text-textColor w-[50%]">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {itemServices.map((item)=>(
                <ServiceCard key={item.id} {...item}/>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Services