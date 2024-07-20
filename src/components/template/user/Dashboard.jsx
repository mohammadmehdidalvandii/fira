import PageHeader from "../../module/PageHeader/PageHeader"


function Dashboard() {
  return (
    <section className="block">
        <PageHeader title='پیشخوان'/>
        <div className="grid sm:grid-flow-col md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <div className="block text-center bg-primary rounded-md p-4 text-white">
                <h5 className="block font-dana-bold text-2xl">مقاله های منشتر شد توسط شما</h5>
                <span className="block text-lg mt-4">45 - عدد</span>
            </div>
            <div className="block text-center bg-primary rounded-md p-4 text-white">
                <h5 className="block font-dana-bold text-2xl">درخواست های شما </h5>
                <span className="block text-lg mt-4">45 - عدد</span>
            </div>
            <div className="block text-center bg-primary rounded-md p-4 text-white">
                <h5 className="block font-dana-bold text-2xl">درخواست های تکمیل شد </h5>
                <span className="block text-lg mt-4">45 - عدد</span>
            </div>
            <div className="block text-center bg-primary rounded-md p-4 text-white">
                <h5 className="block font-dana-bold text-2xl">وضعیت قرداد شما</h5>
                <span className="block text-lg mt-4">فعال</span>
            </div>
        </div>
    </section>
  )
}

export default Dashboard