import ServiceCard from '../../../module/ServiceCard/ServiceCard';
function Service() {
  return (
    <section className="block w-full bg-success mt-12 py-16">
      <div className="container">
        <div className="block">
          <div className="block text-center ">
            <h2 className="block font-dana-bold text-4xl text-secondary">
              خدمات <span className="text-primary">آژانس ما</span>
            </h2>
            <p className="block text-textColor mt-4 w-4/6 text-center mx-auto">
              لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
              ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی
              ساختار چاپ و متن را در بر می گیرد.
            </p>
          </div>
          <div className="grid mt-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
