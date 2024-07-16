

function Content({title ,  description}) {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="block w-full">
                <img src="/assets/images/bg-sd.jpg" alt="bg-images" className="block w-full rounded-lg" />
                <div className="block mt-6">
                    <h3 className="block font-dana-bold text-md text-secondary">{title}</h3>
                    <p className="block text-textColor mt-4">{description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content