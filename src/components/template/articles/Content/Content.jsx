function Content({image , date , subTitle , title}) {
  return (
    <section className="block w-full mt-12">
      <div className="container">
        <div className="block">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="block">
              <img
                src={image}
                alt="article-image"
                className="block rounded-lg"
              />
            </div>
            <div className="block">
              <img
                src="/assets/images/ad-1.jpg"
                alt="article-image"
                className="block rounded-lg"
              />
            </div>
          </div>
          <div className="block mt-8">
                <ul className="flex items-center gap-4">
                    <li className="flex items-center">
                        <span className="block font-dana-bold text-xl text-secondary">نوشته شد در :</span>
                        <span className="block font-dana-bold text-sm text-textColor mr-3">{date}</span>
                    </li>
                    <li className="flex items-center">
                        <span className="block font-dana-bold text-xl text-secondary">ارسال شد توسط :</span>
                        <span className="block font-dana-bold text-sm text-textColor mr-3">جان اندرسون</span>
                    </li>
                </ul>
                <div className="block mt-8">
                    <h4 className="block font-dana-bold text-4xl text-secondary">{subTitle}</h4>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
                <div className="block mt-8">
                    <h4 className="block font-dana-bold text-4xl text-secondary">{title}</h4>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                    <p className="block mt-4 text-textColor">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است.</p>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
