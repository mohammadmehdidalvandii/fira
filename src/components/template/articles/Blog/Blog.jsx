import { useEffect, useState } from "react";
import ArticleCard from "../../../module/ArticleCard/ArticleCard"

function Blog() {
  const [articles , setArticles] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/articles')
    .then(res=> res.json())
    .then(data=>{
      setArticles(data)
    })
    .catch(err=>{
      console.log("Error =>" , err);
    });
  },[])
  return (
    <section className="block w-full mt-12">
        <div className="container">
           <div className="block w-full">
                <div className="block text-center">
                    <h2 className="block font-dana-bold text-5xl text-secondary">آخرین <span className="text-primary">اخبار</span> ما</h2>
                    <p className="block text-center mx-auto text-textColor mt-4 w-2/3">
                    لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                    </p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {articles.map(item=>(
                    <ArticleCard key={item.id} {...item}/>
                  ))}
                </div>
           </div>
        </div>
    </section>
  )
}

export default Blog