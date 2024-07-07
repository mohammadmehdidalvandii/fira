import TeamCard from "../../../module/TeamCard/TeamCard"


function Team() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="block">
                <div className="block text-center">
                    <h3 className="block font-dana-bold text-4xl text-secondary">تیم با تجربه ما</h3>
                    <p className="block text-center mx-auto mt-4 w-3/5 text-textColor ">لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم ایپسوم به مدت 40 سال استاندارد صنعت بوده است. لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد.</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
                   <TeamCard/>
                   <TeamCard/>
                   <TeamCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team