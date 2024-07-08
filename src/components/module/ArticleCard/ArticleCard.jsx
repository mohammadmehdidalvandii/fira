import { Link } from "react-router-dom";


function ArticleCard() {
  return (
    <div className="block bg-white shadow-lg shadow-gray-400  ease-out duration-300 hover:text-primary ">
    <img src="/assets/images/blog-1.jpg" alt="article image" className="w-full" />
    <div className="block py-6 px-4">
        <span className="block text-sm text-primary-100">20 فروردین 1402</span>
        <h5 className="block font-dana-bold text-3xl my-5">نکاتی برای کسب درآمد صنعت دیجیتال</h5>
        <p className="block text-sm text-textColor ">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. </p>
        <Link to='/' className="block mt-4 text-2xl font-semibold">بیشتر بدانید</Link>
    </div>
</div>
  )
}

export default ArticleCard