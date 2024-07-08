import Accordion from "../../../module/Accordion/Accordion"



function Question() {
  return (
    <section className="block w-full mt-20">
        <div className="container">
            <div className="block text-center">
                <h4 className="block font-dana-bold text-4xl text-secondary">سوالات <span className="text-primary">متداول درباه</span> خدمات</h4>
                <p className="block mx-auto text-center w-8/12 text-textColor mt-4">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.</p>
            </div>

            <div className="flex flex-col-reverse md:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
                <div className="block">
                   <Accordion title="سوال متداول اول"/>
                   <Accordion title="سوال متداول دوم"/>
                   <Accordion title="سوال متداول سوم"/>
                   <Accordion title="سوال متداول چهارم"/>
                </div>
                <div className="block">
                    <img src="/assets/images/question.png" alt="question image" className="w-full" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question