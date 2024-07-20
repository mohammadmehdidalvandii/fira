import PageHeader from "../../module/PageHeader/PageHeader"


function  Request() {
  return (
    <section className="block">
        <PageHeader title="درخواست ها شما"/>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="block bg-primary rounded-md p-4 text-white">
                <h6 className="block font-dana-bold text-xl">افزودن درخواست</h6>
                <form action="#" className="block mt-4">
                    <div className="block mb-4">
                        <span className="block">نام و نام خانوادگی</span>
                        <input type="text" className="block mt-2 w-full h-8 rounded-md text-secondary pr-2 outline-none border-none" />
                    </div>
                    <div className="block mb-4">
                        <span className="block">ایمیل</span>
                        <input type="text" className="block mt-2 w-full h-8 rounded-md text-secondary pr-2 outline-none border-none" />
                    </div>
                    <div className="block mb-4">
                        <span className="block">شماره همراه</span>
                        <input type="text" className="block mt-2 w-full h-8 rounded-md text-secondary pr-2 outline-none border-none" />
                    </div>
                    <div className="block mb-4">
                        <span className="block">موضوع درخواست</span>
                        <input type="text" className="block mt-2 w-full h-8 rounded-md text-secondary pr-2 outline-none border-none" />
                    </div>
                    <div className="block mb-4">
                        <span className="block">متن درخواست</span>
                        <textarea type="text" className="block mt-2 w-full h-28 rounded-md text-secondary pr-2 pt-2 outline-none border-none" />
                    </div>
                    <button className="flex items-center justify-center border-none outline-none w-full h-12 bg-white text-secondary ease-out duration-300 rounded-md hover:bg-secondary hover:text-white">ارسال</button>
                </form>
            </div>
            <div className="block bg-primary rounded-md p-4 text-white h-[300px] overflow-y-scroll">
                <div className="flex justify-between bg-white h-12 w-full text-secondary px-3 mb-4">
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">درخواست :</span>
                        <span className="block pr-2 text-textColor">مشاوره</span>
                    </div>
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">وضعیت :</span>
                        <span className="block pr-2 text-textColor">منتظر</span>
                    </div>
                    <button className="block w-[100px] ease-out duration-300 hover:text-green-800 hover:bg-secondary ">مشاهده</button>
                </div>
                <div className="flex justify-between bg-white h-12 w-full text-secondary px-3 mb-4">
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">درخواست :</span>
                        <span className="block pr-2 text-textColor">مشاوره</span>
                    </div>
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">وضعیت :</span>
                        <span className="block pr-2 text-textColor">منتظر</span>
                    </div>
                    <button className="block w-[100px] ease-out duration-300 hover:text-green-800 hover:bg-secondary ">مشاهده</button>
                </div>
                <div className="flex justify-between bg-white h-12 w-full text-secondary px-3 mb-4">
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">درخواست :</span>
                        <span className="block pr-2 text-textColor">مشاوره</span>
                    </div>
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">وضعیت :</span>
                        <span className="block pr-2 text-textColor">منتظر</span>
                    </div>
                    <button className="block w-[100px] ease-out duration-300 hover:text-green-800 hover:bg-secondary ">مشاهده</button>
                </div>
                <div className="flex justify-between bg-white h-12 w-full text-secondary px-3 mb-4">
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">درخواست :</span>
                        <span className="block pr-2 text-textColor">مشاوره</span>
                    </div>
                    <div className="flex items-center">
                        <span className="block font-dana-bold text-lg text-secondary">وضعیت :</span>
                        <span className="block pr-2 text-textColor">منتظر</span>
                    </div>
                    <button className="block w-[100px] ease-out duration-300 hover:text-green-800 hover:bg-secondary ">مشاهده</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Request