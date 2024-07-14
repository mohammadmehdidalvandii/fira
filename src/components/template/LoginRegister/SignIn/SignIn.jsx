import { Link } from "react-router-dom";

function SignIn() {
  return (
    <section className="block w-full mt-12 ">
      <div className="container">
        <div className="block mx-auto bg-white w-full  sm:w-[400px] rounded-lg shadow-lg shadow-gray-400 p-3">
          <div className="block text-center text-secondary mb-6">
            <h6 className="block font-dana-bold text-3xl">خوش آمدید</h6>
            <span className="block mt-3 text-textColor text-sm">لطفا وارد حساب کاربری بشوید!</span>
          </div>
          <form action="#" className="block">
                <input type="text" className="block outline-none border border-gray-400 w-full h-12 rounded-md pr-3 focus:border-primary mb-6" placeholder="ایمیل"/>
                <input type="text" className="block outline-none border border-gray-400 w-full h-12 rounded-md pr-3 focus:border-primary mb-6" placeholder="رمز عبور"/>
                <div className="flex flex-col sm:flex-row items-center justify-between ">
                    <div className="flex items-center mb-6">
                        <input type="checkbox"  className="block w-4 h-4 accent-primary"/>
                        <span className="block text-base text-textColor pr-2">مرا به خاطر بسپار</span>
                    </div>
                    <div className="black">
                        <Link to='/' className="block text-base text-textColor ease-out duration-300 hover:text-primary">فراموشی رمز ؟</Link>
                    </div>
                </div>
                <button className="button-primary w-full">ورود</button>
                <div className="flex items-center my-4 ">
                    <span className="block text-textColor">حساب کاربری ندارید ؟</span>
                    <Link to='/' className="block pr-2 text-primary hover:text-secondary">ثبت نام</Link>
                </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
