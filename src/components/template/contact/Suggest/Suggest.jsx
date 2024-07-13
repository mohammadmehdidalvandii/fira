

function Suggest() {
  return (
    <section className="block w-full mt-16">
        <div className="container">
            <div className="flex flex-col-reverse  md:grid w-full gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="block">
                    <div className="block">
                        <h5 className="block font-dana-bold text-4xl text-secondary">پیشنهادی برای ما دارید؟</h5>
                        <p className="block text-textColor mt-3">
                        لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. 
                        </p>
                    </div>
                    <form action="#" className="block w-full mt-8 bg-white py-4 px-2 shadow-lg shadow-gray-300 rounded-lg">
                        <div className="block mb-6">
                            <span className="block text-sm font-semibold text-secondary mb-3">نام کاربری</span>
                            <input type="text" className="block w-full h-12 bg-success pr-3 outline-none border-none rounded-md" placeholder="نام شما" />
                        </div>
                        <div className="block mb-6">
                            <span className="block text-sm font-semibold text-secondary mb-3">ایمیل</span>
                            <input type="text" className="block w-full h-12 bg-success pr-3 outline-none border-none rounded-md" placeholder="ایمیل" />
                        </div>
                        <div className="block mb-6">
                            <span className="block text-sm font-semibold text-secondary mb-3">موضوع</span>
                            <input type="text" className="block w-full h-12 bg-success pr-3 outline-none border-none rounded-md" placeholder="موضوع" />
                        </div>
                        <div className="block mb-6">
                            <span className="block text-sm font-semibold text-secondary mb-3">پیام شما</span>
                            <textarea type="text" className="block w-full h-32 bg-success pr-3 pt-3 outline-none border-none rounded-md" placeholder="پیام" />
                        </div>
                        <button className="button-primary w-full">ارسال پیام</button>
                    </form>
                </div>
                <div className="block">
                    <img src="/assets/images/suggest.png" alt="suggest image" className="block w-full mt-8" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Suggest