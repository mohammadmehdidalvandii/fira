import PageHeader from "../../module/PageHeader/PageHeader"
import CardArticle from "./CardArticle"


function Articles() {
  return (
    <section className="block">
        <PageHeader title="مقالات سایت"/>
        <div className="block bg-primary-100 p-3 rounded-md h-60 overflow-y-scroll select-none">
            <CardArticle/>  
            <CardArticle/>  
            <CardArticle/>  
            <CardArticle/>  
            <CardArticle/>  
            <CardArticle/>  
            <CardArticle/>  
        </div>
        <div className="block bg-primary-100 p-3 rounded-md  mt-8 text-secondary">
            <h4 className="block text-2xl mb-3">افزودن مقاله</h4>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">نام مقاله</span>
                <input type="text" className="w-full h-12 pr-3 rounded" placeholder="توسعه صعنت غذایی"/>
            </div>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">نام نویسنده</span>
                <input type="text" className="w-full h-12 pr-3 rounded" placeholder="جان اندرسون"/>
            </div>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">نام نویسنده</span>
                <textarea type="text" className="w-full h-52 pr-3 pt-3 rounded" placeholder="متن مقاله"/>
            </div>
            <button className="flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white">افزودن</button>
        </div>
    </section>
  )
}

export default Articles