import { Formik } from 'formik'
import { Link } from 'react-router-dom'

function SingUp() {
  return (
    <section className="block w-full mt-12 ">
        <div className="container">
        <div className="block mx-auto bg-white w-full  sm:w-[400px] rounded-lg shadow-lg shadow-gray-400 p-3">
        <div className="block text-center text-secondary mb-6">
          <h6 className="block font-dana-bold text-3xl">خوش آمدید</h6>
          <span className="block mt-3 text-textColor text-sm">لطفا ثبت نام خود را کامل کنید</span>
          <Formik
              initialValues={{ text: "", email: "", password: "" }}
              validate={(values) => {
                const errors = {};

                if (values.text === "") {
                  errors.text = "مقدار نام کاربری اجاری هست";
                } else if (values.text.length < 4) {
                  errors.text = "مقدار حروف نام کاربری بیشتر از 4 باید باشد";
                }

                if (values.email === "") {
                  errors.email = "مقدار ایمیل اجباری است";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = "مقدار ایمیل معتبر نیست ";
                }

                if (values.password === '') {
                  errors.password = "مقدار رمز عبور اجباری است";
                } else if (values.password.length < 8) {
                  errors.password = "مقدار حروف رمز عبور باید بیشتر از 8 باشد";
                }

                return errors;
              }}
            >
              {({ values, handleSubmit, handleChange, handleBlur, errors, touched }) => (
                <form action="#" className="block mt-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="text"
                    value={values.text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block outline-none border border-gray-400 w-full h-12 rounded-md pr-3 focus:border-primary mb-6"
                    placeholder="نام کاربری"
                  />
                  {errors.text && touched.text && (
                    <span className="text-sm text-red-700">{errors.text}</span>
                  )}
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block outline-none border border-gray-400 w-full h-12 rounded-md pr-3 focus:border-primary mb-6"
                    placeholder="ایمیل"
                  />
                  {errors.email && touched.email && (
                    <span className="text-sm text-red-700">{errors.email}</span>
                  )}
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="block outline-none border border-gray-400 w-full h-12 rounded-md pr-3 focus:border-primary mb-6"
                    placeholder="رمز عبور"
                  />
                  {errors.password && touched.password && (
                    <span className="text-sm text-red-700">{errors.password}</span>
                  )}
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center mb-6">
                      <input type="checkbox" className="block w-4 h-4 accent-primary" />
                      <span className="block text-base text-textColor pr-2">مرا به خاطر بسپار</span>
                    </div>
                  </div>
                  <button className="button-primary w-full">ورود</button>
                  <div className="flex items-center my-4">
                    <span className="block text-textColor">آیا قبلا ثبت نام کردید ؟</span>
                    <Link to="/Login" className="block pr-2 text-primary hover:text-secondary">
                      ورود
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
      </div>
    </div>
        </div>
  </section>
  )
}

export default SingUp