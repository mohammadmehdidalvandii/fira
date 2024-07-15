import { Link } from "react-router-dom"
import ArticleCard from '../../../module/ArticleCard/ArticleCard'

function Latest() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="block">
                <div className="flex items-center justify-between">
                    <h4 className="block font-dana-bold text-xl text-secondary">آخرین مقالات منتشرشد</h4>
                    <Link to='/Articles' className="block text-textColor text-xl ease-out duration-300 hover:text-primary">بیشتر</Link>
                </div>
                <div className="grid mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleCard/>
                    <ArticleCard/>
                    <ArticleCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest