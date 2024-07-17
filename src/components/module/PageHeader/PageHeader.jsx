

function PageHeader({title}) {
  return (
    <section className="flex items-center flex-wrap bg-primary text-white px-4 h-10 rounded-xl mb-4">
        <span className="block text-xl ml-2">{title}</span>
        /
        <span className="block text-xl mr-2">به پنل کاربری خوش آمدید - جان اندرسون</span>
    </section>
  )
}

export default PageHeader