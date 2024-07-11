import { Link } from "react-router-dom";

function Breadcrumb({title , subtitle}) {
  return (
    <section className="block w-full h-[50vh] bg-[url('/assets/images/Breadcrumb.jpg')] bg-center bg-cover object-cover bg-fixed ">
      <div className="bg-black  w-full h-[50vh] opacity-[60%]">
        <div className="container">
            <div className="block pt-24 text-white mx-auto text-center z">
                <h2 className="block font-dana-black text-5xl">{title}</h2>
                <div className="flex items-center justify-center gap-3 mt-6">
                    <Link to='/' className="block text-2xl ease-out duration-300 hover:text-primary">خانه</Link>
                    <span className="block bg-primary w-2 h-2 rounded-[50%]"></span>
                    <span className="block text-2xl">{subtitle}</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
