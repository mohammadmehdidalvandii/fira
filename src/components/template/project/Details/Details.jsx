import { Link } from "react-router-dom"


function Details({customer , category ,date}) {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="block">
                <ul className="flex flex-col gap-6 sm:flex-row sm:gap-0 items-center justify-between">
                    <li className="block text-center">
                        <span className="block font-dana-bold text-2xl">مشتری</span>
                        <span className="block mt-3 text-textColor">{customer}</span>
                    </li>
                    <li className="block text-center">
                        <span className="block font-dana-bold text-2xl">دسته بندی</span>
                        <span className="block mt-3 text-textColor">{category}</span>
                    </li>
                    <li className="block text-center">
                        <span className="block font-dana-bold text-2xl">تاریخ</span>
                        <span className="block mt-3 text-textColor">{date}</span>
                    </li>
                    <li className="block">
                        <Link to='/' className="button-primary">پیشنمایش</Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Details