

function UserCard() {
  return (
    <div className="flex items-center justify-evenly bg-white h-8 w-full rounded-sm mb-3 ">
    <div className="flex items-center">
        <span className="block font-dana-bold text-xl ml-2">نام :</span>
        <span className="block text-textColor">جان اندرسون</span>
    </div>
    <div className="flex items-center">
        <span className="block font-dana-bold text-xl ml-2">سمت :</span>
        <span className="block text-textColor">ادمین</span>
    </div>
    <div className="flex items-center">
        <span className="block font-dana-bold text-xl ml-2"> تاریخ ثبت نام:</span>
        <span className="block text-textColor">1402/1/22</span>
    </div>
    <div className="flex items-center gap-6">
        <button className="flex items-center outline-none border-none ease-out duration-300 hover:text-red-700">بن</button>
        <button className="flex items-center outline-none border-none ease-out duration-300 hover:text-green-700">ویرایش</button>
        <button className="flex items-center outline-none border-none ease-out duration-300 hover:text-red-700">حذف</button>
    </div>
</div>
  )
}

export default UserCard