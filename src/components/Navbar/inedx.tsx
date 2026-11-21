import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Drawer from "../Drawer";
import "./style.scss";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(nextTheme);
  };

  return <>
    <nav className="Nav-bar" aria-label="Primary navigation">
      <a className="nav-brand" href="#home" aria-label="Mohamed Badry home">MB<span>.</span></a>
      <div className="nav-links">
        <a href="#Projects">WORK</a><a href="#Courses">JOURNEY</a><a href="#Features">SERVICES</a>
      </div>
      <div className="nav-actions">
        <button className="theme-button" onClick={toggleTheme} aria-label="Toggle color theme">{theme === "dark" ? <LuSunMoon /> : <FaMoon />}</button>
        <a className="nav-cta" href="#Contact">LET&apos;S TALK</a>
        <button className="menu-Icon" onClick={() => setIsOpen(true)} aria-label="Open navigation"><IoIosMenu /></button>
      </div>
    </nav>
    <Drawer isOpen={isOpen} toggleDrawer={() => setIsOpen((open) => !open)} closeDrawer={<IoCloseSharp className="close-drawer" onClick={() => setIsOpen(false)} />} />
  </>;
};

export default Navbar;
