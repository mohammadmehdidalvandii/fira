function Banner() {
  return (
    <section className="block w-full">
      <div className="container">
        <div className="grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="block w-full">
            <div className="block sm:mt-0 md:mt-24">
              <span className="block text-lg text-secondary mb-4">بازاریابی دیجیتال</span>
              <h1 className="font-dana-black text-6xl text-secondary mb-8">خدمات دیجیتال با کیفیت عالی</h1>
              <p className="text-sm text-secondary">
                لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به
                سادگی ساختار چاپ و متن را در بر می گیرد.
              </p>
            </div>
          </div>
          <div className="block">
                <div className="flex relative mt-24">
                    <img src="/assets/images/1.png" alt="image banner" className="block absolute top-1 left-0" />
                    <img src="/assets/images/2.png" alt="image banner" className="block absolute top-0 right-0" />
                    <img src="/assets/images/3.png" alt="image banner" className="block absolute bottom-[-2rem] left-[50%]" />
                    <img src="/assets/images/4.png" alt="image banner" className="block absolute top-20 right-[20%]" />
                    <img src="/assets/images/5.png" alt="image banner" className="block absolute top-[10rem] left-[40%]" />
                    <img src="/assets/images/6.png" alt="image banner" className="block absolute top-[4rem] right-[25%]"  />
                    <img src="/assets/images/7.png" alt="image banner" className="block absolute top-[-5rem] left-5" />
                    <img src="/assets/images/8.png" alt="image banner" className="block absolute top-12 " />
                    <img src="/assets/images/9.png" alt="image banner" className="block absolute top-[-5rem]" />
                    <img src="/assets/images/10.png" alt="image banner" className="block absolute bottom-[-19rem] left-0" />
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
