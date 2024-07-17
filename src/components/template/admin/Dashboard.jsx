import PageHeader from '../../module/PageHeader/PageHeader';

function Dashboard() {
  return (
    <section className="block">
        <PageHeader title='پیشخوان'/>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="block bg-primary-100 rounded-md p-3 text-secondary text-center">
                <h6 className="block font-dana-bold text-2xl">مقالات</h6>
                <span className="flex items-center justify-center rounded-2xl text-white mt-3 bg-primary h-8">155 - عدد</span>
            </div>
            <div className="block bg-primary-100 rounded-md p-3 text-secondary text-center">
                <h6 className="block font-dana-bold text-2xl">پروژه ها</h6>
                <span className="flex items-center justify-center rounded-2xl text-white mt-3 bg-primary h-8">155 - عدد</span>
            </div>
            <div className="block bg-primary-100 rounded-md p-3 text-secondary text-center">
                <h6 className="block font-dana-bold text-2xl">اطلاعات</h6>
                <span className="flex items-center justify-center rounded-2xl text-white mt-3 bg-primary h-8">155 - عدد</span>
            </div>
            <div className="block bg-primary-100 rounded-md p-3 text-secondary text-center">
                <h6 className="block font-dana-bold text-2xl">کاربران</h6>
                <span className="flex items-center justify-center rounded-2xl text-white mt-3 bg-primary h-8">155 - عدد</span>
            </div>
            <div className="block bg-primary-100 rounded-md p-3 text-secondary text-center">
                <h6 className="block font-dana-bold text-2xl">تعداد کاربران جدید</h6>
                <span className="flex items-center justify-center rounded-2xl text-white mt-3 bg-primary h-8">155 - عدد</span>
            </div>
        </div>
        
    </section>
  )
}

export default Dashboard