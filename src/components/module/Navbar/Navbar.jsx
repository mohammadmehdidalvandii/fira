import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isSearch, setIsSearch] = useState(false);
  const [locationMenu, setLocationMenu] = useState("/");
  const [activeNavbarMenu, setActiveNavbarMenu] = useState(false);

  const handlerActiveMenuNav = () => {
    setActiveNavbarMenu(!activeNavbarMenu);
  };

  useEffect(() => {
    const pathName = location.pathname;
    setLocationMenu(pathName);
    setActiveNavbarMenu(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handlerSearchbox = () => {
    setIsSearch(!isSearch);
  };
  return (
    <>
      <section className="hidden lg:block py-4 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/" className="no-underline">
              <img src="/assets/images/logo.png" alt="logo" />
            </Link>

            <ul className="flex items-center gap-6">
              <li className="block">
                <Link
                  to="/"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/" ? "text-primary" : ""
                  }`}
                >
                  خانه
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/About"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/About" ? "text-primary" : ""
                  }`}
                >
                  درباره ما
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/Services"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/Services" ? "text-primary" : ""
                  }`}
                >
                  خدمات
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/Project"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/Project" ? "text-primary" : ""
                  }`}
                >
                  پروژه ها
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/Article"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/Article" ? "text-primary" : ""
                  }`}
                >
                  وبلاگ
                </Link>
              </li>
              <li className="block">
                <Link
                  to="/Contact"
                  className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                    locationMenu === "/Contact" ? "text-primary" : ""
                  }`}
                >
                  تماس با ما
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <div className="block relative">
                {isSearch ? (
                  <span
                    className="text-lg text-secondary cursor-pointer hover:text-primary"
                    onClick={handlerSearchbox}
                  >
                    <FaTimes />
                  </span>
                ) : (
                  <span
                    className="text-lg text-secondary cursor-pointer hover:text-primary"
                    onClick={handlerSearchbox}
                  >
                    <FaSearch />
                  </span>
                )}
                {isSearch && (
                  <div className="flex items-center justify-center fixed top-20 left-[18rem] bg-gray-100 shadow-sm shadow-gray-7    00 rounded-sm w-[250px] h-20">
                    <input
                      type="text"
                      className="h-8 pr-2 text-secondary border-none outline-none"
                      placeholder="جستجو"
                    />
                    <span className="text-lg text-secondary cursor-pointer mr-3 hover:text-primary">
                      <FaSearch />
                    </span>
                  </div>
                )}
              </div>
              <Link
                to="/"
                className="flex items-center justify-center w-[120px] h-10 bg-secondary rounded-lg text-white ease-linear delay-300 hover:bg-primary"
              >
                ورود
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="block lg:hidden py-4 bg-white">
        <div className="container">
          <div className="flex justify-between items-center relative">
            <Link to="/" className="block">
              <img src="/assets/images/logo.png" alt="logo images" />
            </Link>
            {activeNavbarMenu ? (
              <span
                className="flex justify-center items-center text-md cursor-pointer hover:text-primary"
                onClick={handlerActiveMenuNav}
              >
                <FaTimes />
              </span>
            ) : (
              <span
                className="flex justify-center items-center text-md cursor-pointer hover:text-primary"
                onClick={handlerActiveMenuNav}
              >
                <FaBars />
              </span>
            )}
            {activeNavbarMenu && (
              <div className="block w-full absolute top-16 z-10  bg-white border-[1px] border-gray-400 rounded-md pr-2">
                <ul className="block w-full mt-2">
                  <li className="block w-full mb-6">
                    <Link
                      to="/Login"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/Login" ? "text-primary" : ""
                      }`}
                    >
                      ورود
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/" ? "text-primary" : ""
                      }`}
                    >
                      خانه
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/About"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/About" ? "text-primary" : ""
                      }`}
                    >
                      درباه ما
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/Services"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/Services" ? "text-primary" : ""
                      }`}
                    >
                      خدمات
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/Project"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/Project" ? "text-primary" : ""
                      }`}
                    >
                      پروژه ها
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/Article"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/Article" ? "text-primary" : ""
                      }`}
                    >
                      وبلاگ
                    </Link>
                  </li>
                  <li className="block w-full mb-6">
                    <Link
                      to="/Contact"
                      className={`font-dana-bold text-secondary ease-linear delay-300 hover:text-primary ${
                        locationMenu === "/Contact" ? "text-primary" : ""
                      }`}
                    >
                      تماس با ما
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
