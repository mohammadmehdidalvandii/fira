import { FaSearch } from "react-icons/fa"
import PageHeader from "../../module/PageHeader/PageHeader"
import UserCard from "./UserCard"

function UserList() {
  return (
    <section className="block">
        <PageHeader title="لیست کاربران سایت"/>
        <div className="block bg-primary-100 p-3 rounded-lg">
            <div className="flex items-center pb-4 border-b">
                <input type="text" className="w-[250px] h-10 bg-success pr-2" placeholder="جستجو نام کاربر" />
                <span className="block mr-2 text-2xl ease-out duration-300 cursor-pointer hover:text-primary"><FaSearch/></span>
            </div>
            <div className="block mt-4 overflow-y-scroll h-[300px]">
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
                <UserCard/>
            </div>
        </div>
    </section>
  )
}

export default UserList