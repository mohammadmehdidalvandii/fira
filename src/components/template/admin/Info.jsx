import PageHeader from '../../module/PageHeader/PageHeader'

function Info() {
  return (
   <section className="block">
    <PageHeader title="ویرایش اطلاعات"/>
        <div className="block bg-primary-100 p-3 rounded-lg">
         <div className="grid md:grid-cols-2">
         <ul className="block">
                <li className="flex items-center mb-4">
                    <span className="block font-dana-bold text-xl bg-primary text-white p-2 rounded-md ">نام :</span>
                    <span className="block text-base mr-3 font-semibold">جان اندروسون</span>
                </li>
                <li className="flex items-center mb-4">
                    <span className="block font-dana-bold text-xl bg-primary text-white p-2 rounded-md ">شغل :</span>
                    <span className="block text-base mr-3 font-semibold">ادمین سایت</span>
                </li>
                <li className="flex items-center mb-4">
                    <span className="block font-dana-bold text-xl bg-primary text-white p-2 rounded-md ">شماره همراه :</span>
                    <span className="block text-base mr-3 font-semibold">09121234567</span>
                </li>
                <li className="flex items-center mb-4">
                    <span className="block font-dana-bold text-xl bg-primary text-white p-2 rounded-md ">ایمیل :</span>
                    <span className="block text-base mr-3 font-semibold">johnAndr@gamil.com</span>
                </li>
            </ul>
            <div className="block">
                <img src="/assets/images/team-1.jpg" alt="" className="w-[120px] h-[120px] rounded-[50%]" />
                <span className="block mt-4">تغییر عکس پروفایل</span>
                <input type="file" className='mt-4' />
            </div>
         </div>
        </div>
         <div className="block bg-primary-100 p-3 rounded-lg mt-8">
            <h6 className="block text-2xl  mb-4">تغییر اطلاعات</h6>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">نام </span>
                <input type="text" className="w-full h-12 pr-3 rounded" placeholder="جان اندرسون"/>
            </div>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">ایمیل </span>
                <input type="text" className="w-full h-12 pr-3 rounded" placeholder="johnAndr@gamil.com"/>
            </div>
            <div className="block mb-3">
                <span className="block text-lg mb-1 font-semibold ">شماره همراه  </span>
                <input type="text" className="w-full h-12 pr-3 rounded" placeholder="09121234567"/>
            </div>
            <button className="flex items-center justify-center bg-white w-full h-12 rounded-md ease-out duration-300 hover:bg-secondary hover:text-white">افزودن</button>
         </div>
   </section>
  )
}

export default Info