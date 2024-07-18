import PageHeader from "../../module/PageHeader/PageHeader"
import CardProject from "./CardProject"


function Projects() {
  return (
    <section className="block">
        <PageHeader title="پروژه ها"/>
        <div className="block mt-8 h-[450px] overflow-y-scroll bg-primary-100 p-3 rounded-lg">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </div>
    </section>
  )
}

export default Projects