import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="bg-gray-100">
      <nav className="max-w-6xl text mx-auto my-0 ">
        <ul className="flex justify-between p-1 w-full">
          <div className="logo">
            <NavLink className="text-xl font-bold" to="/">
              GreenTea
            </NavLink>
          </div>
          <div className="flex p-3">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/service"
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/project"
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-custom p-3 mx-2 font-medium"
                    : "p-3 mx-2 font-medium hover:text-custom duration-500"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
