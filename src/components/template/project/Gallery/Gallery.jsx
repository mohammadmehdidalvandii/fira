

function Gallery() {
  return (
    <section className="block w-full mt-12">
        <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="block">
                    <img src="/assets/images/sd-1.jpg" alt="project-image" className="block w-full rounded-lg" />
                </div>
                <div className="block">
                    <img src="/assets/images/sd-2.jpg" alt="project-image" className="block w-full rounded-lg" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery