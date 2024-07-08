import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="block w-full mt-20 bg-success py-24">
      <div className="container">
        <div className="block">
          <div className="grid sm:grid-flow-col md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="block mb-3">
              <div className="block">
                <h4 className="block font-dana-bold text-2xl">
                  عضویت درخبرنامه
                </h4>
                <p className="block text-textColor text-sm mt-2">
                  لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                  ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
                </p>
              </div>
            </div>
            <div className="block mb-3">
              <div className="flex items-center h-full flex-wrap sm:flex-nowrap w-full sm-h-16 bg-white px-3 rounded-md">
                <input
                  type="text"
                  className="w-full h-full outline-none border-none"
                  placeholder="آدرس ایمیل شما"
                />
                <button className="button-primary w-full sm:w-32">
                  مشترک شدن
                </button>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="block">
              <h6 className="block font-dana-bold text-2xl text-secondary">
                درباره ما
              </h6>
              <p className="block text-textColor text-sm mt-2">
                لورم ایپسوم به سادگی ساختار چاپ و متن را در بر می گیرد. لورم
                ایپسوم به مدت 40 سال استاندارد صنعت بوده است.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <Link
                  to="/"
                  className="flex justify-center items-center w-12 h-12 bg-primary text-white rounded-[50%] ease-out duration-300 hover:bg-primary-100"
                >
                  <span className="">
                    <FaFacebookF />
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex justify-center items-center w-12 h-12 bg-primary text-white rounded-[50%] ease-out duration-300 hover:bg-primary-100"
                >
                  <span className="">
                    <FaTwitter />
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex justify-center items-center w-12 h-12 bg-primary text-white rounded-[50%] ease-out duration-300 hover:bg-primary-100"
                >
                  <span className="">
                    <FaLinkedin />
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex justify-center items-center w-12 h-12 bg-primary text-white rounded-[50%] ease-out duration-300 hover:bg-primary-100"
                >
                  <span className="">
                    <FaInstagram />
                  </span>
                </Link>
              </div>
            </div>
            <ul className="block">
              <h6 className="block mb-6 font-dana-bold text-2xl text-secondary">
                لینک های مفید
              </h6>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  درباره ما
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  پروژه ها
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  خدمات
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  وبلاگ{" "}
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
            <ul className="block">
              <h6 className="block mb-6 font-dana-bold text-2xl text-secondary">
                خدمات برجسته
              </h6>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  مدیریت داده ها
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  توسعه دهنده
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  خدمات
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  طراحی رابط کاربری
                </Link>
              </li>
              <li className="block mb-6">
                <Link
                  to=""
                  className="text-lg text-secondary font-semibold ease-out duration-300 hover:text-primary"
                >
                  مهندس پشتیبانی
                </Link>
              </li>
            </ul>
            <ul className="block">
              <h6 className="block mb-6 font-dana-bold text-2xl text-secondary">
                تماس با ما
              </h6>
              <li className="flex mb-8">
                <span className="block text-md"><FaPhone/></span>
                <div className="block mr-3">
                    <span className="block font-dana-bold text-lg font-semibold">تلفن</span>
                    <span className="block text-sm mt-3">021-4444444</span>
                </div>
              </li>
              <li className="flex mb-8">
                <span className="block text-md"><IoMail/></span>
                <div className="block mr-3">
                    <span className="block font-dana-bold text-lg font-semibold">ایمیل</span>
                    <span className="block text-sm mt-3">hello@gamil.com</span>
                </div>
              </li>
              <li className="flex mb-8">
                <span className="block text-md"><IoLocation/></span>
                <div className="block mr-3">
                    <span className="block font-dana-bold text-lg font-semibold">آدرس</span>
                    <span className="block text-sm mt-3">تهران انقلاب ابتدای آزادی</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
