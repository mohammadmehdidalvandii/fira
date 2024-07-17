

function CardArticle() {
  return (
    <div className="flex items-center justify-between px-2 bg-white h-8 rounded mb-3">
    <span className="block">نام - نکاتی برای کسب دارم دیجیتال</span>
    <span className="block">منتشر کننده - الکس ریچاردسون</span>
    <div className="flex items-center gap-6">
        <button className="flex items-center text-primary ease-out duration-300 hover:text-secondary font-extrabold">مشاهده </button>
        <button className="flex items-center text-green-900 ease-out duration-300 hover:text-secondary font-extrabold">تایید</button>
        <button className="flex items-center text-red-700 ease-out duration-300 hover:text-secondary font-extrabold">رد</button>
    </div>
</div>
  )
}

export default CardArticle