import { useEffect, useState } from "react"
import ProjectCard from "../../../module/ProjectCard/ProjectCard"


function Projects() {
    const [itemProjects , setItemProjects] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
          const res = await fetch("http://localhost:3000/projects");
          const data = await res.json();
          setItemProjects(data);
        }
        fetchData();
    },[])


  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="block w-full">
                <div className="block text-center">
                    <h2 className="block font-dana-bold text-4xl text-secondary">نمونه <span className="text-primary">کارهای</span> ما</h2>
                    <p className="block text-center mx-auto text-textColor mt-4 w-2/3">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    {itemProjects.map(item=>(
                        <ProjectCard key={item.id} {...item}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects