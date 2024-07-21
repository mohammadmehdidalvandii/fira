import { Link } from "react-router-dom";


function ArticleCard({image , date ,shortDisc ,subTitle ,id}) {
  return (
    <div className="block bg-white shadow-lg shadow-gray-400  ease-out duration-300 hover:text-primary ">
    <img src={image} alt="article image" className="w-full" />
    <div className="block py-6 px-4">
        <span className="block text-sm text-primary-100">{date}</span>
        <h5 className="block font-dana-bold text-3xl my-5">{subTitle}</h5>
        <p className="block text-sm text-textColor ">{shortDisc}</p>
        <Link to={`/Article-D/${id}`} className="block mt-4 text-2xl font-semibold">بیشتر بدانید</Link>
    </div>
</div>
  )
}

export default ArticleCard