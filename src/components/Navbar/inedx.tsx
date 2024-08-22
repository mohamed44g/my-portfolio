import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import "./style.scss";
import { useState } from "react";
import Drawer from "../Drawer";
const Navbar = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handelClick = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  };
  return (
    <>
      <div className="Nav-bar">
        <ul className="d-flex justify-content-center links">
          <li className="menu-Icon">
            <IoIosMenu size={30} color="#fff" onClick={() => setIsOpen(true)} />
          </li>
          <a href="#About">
            <li className="link">About</li>
          </a>
          <a href="#Projects">
            <li className="link">Projects</li>
          </a>
          <li className="toggle-theme">
            {theme === "dark" ? (
              <LuSunMoon className="nav-icon" onClick={handelClick} />
            ) : (
              <FaMoon className="nav-icon" onClick={handelClick} />
            )}
          </li>
          <a href="#Features">
            <li className="link">Features</li>
          </a>
          <a href="#Contact">
            <li className="link">Contact</li>
          </a>
        </ul>

        <Drawer
          isOpen={isOpen}
          toggleDrawer={toggleDrawer}
          closeDrawer={
            <IoCloseSharp
              className="close-drawer"
              onClick={() => setIsOpen(false)}
            />
          }
        />
      </div>
    </>
  );
};

export default Navbar;
