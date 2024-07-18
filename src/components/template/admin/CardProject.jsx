

function CardProject() {
  return (
    <div className="block bg-white p-2 rounded text-center">
                    <img src="/assets/images/project.png" alt="project image" className="block" />
                    <h6 className="block mt-4 text-xl">توسعه دهنده وب </h6>
                    <div className="flex justify-center items-center gap-8 mt-4">
                        <button className="flex items-center justify-center outline-none border-none bg-none text-secondary text-lg ease-in-out duration-300 hover:text-green-700">تایید</button>
                        <button className="flex items-center justify-center outline-none border-none bg-none text-secondary text-lg ease-in-out duration-300 hover:text-primary">مشاهده جزئیات</button>
                        <button className="flex items-center justify-center outline-none border-none bg-none text-secondary text-lg ease-in-out duration-300 hover:text-red-700">رد</button>
                    </div>
                </div>
  )
}

export default CardProject