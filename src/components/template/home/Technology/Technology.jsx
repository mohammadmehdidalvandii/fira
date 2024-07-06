import { Link } from "react-router-dom"


function Technology() {
  return (
    <section className="block w-full bg-success mt-12 py-8">
            <div className="container">
                <div className="sm:flex sm:flex-col-reverse   md:grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="block mt-20">
                        <h3 className="block font-dana-bold text-md text-secondary">موارد جالب درباره فناروی</h3>
                        <p className="block my-6 font-dana-medium text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                        <Link to='/' className="button-primary">اطلاعات بیشتر</Link>
                    </div>
                    <div className="block">
                        <img src="/assets/images/tech.png" alt="technology image" className="" />
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Technology