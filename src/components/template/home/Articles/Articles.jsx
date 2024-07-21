import { useEffect, useState } from "react";
import ArticleCard from "../../../module/ArticleCard/ArticleCard";

function Articles() {
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
    <section className="block w-full mt-20">
      <div className="container">
        <div className="block">
          <div className="block text-center">
            <h4 className="block font-dana-bold text-4xl text-secondary">
              آخرین <span className="text-primary">اخبار</span> ما
            </h4>
            <p className="block mx-auto text-center w-8/12 mt-4 text-textColor">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد.{" "}
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-6">
            {articles.map(item=>(
              <ArticleCard key={item.id} {...item}/>        
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
