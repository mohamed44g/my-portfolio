import { ReactNode } from "react";

import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import "./style.scss";

interface Iprops {
  isOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: ReactNode;
}

export default function index({ isOpen, toggleDrawer, closeDrawer }: Iprops) {
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="drawer"
    >
      {closeDrawer}

      <div className="drawer-links-container">
        <ul className="drawer-links">
          <a href="#About" onClick={() => toggleDrawer()}>
            <li>About</li>
          </a>

          <a href="#Courses" onClick={() => toggleDrawer()}>
            <li>Courses</li>
          </a>

          <a href="#Projects" onClick={() => toggleDrawer()}>
            <li>Projects</li>
          </a>
          <a href="#Features" onClick={() => toggleDrawer()}>
            <li>Features</li>
          </a>

          <a href="#Contact" onClick={() => toggleDrawer()}>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </Drawer>
  );
}
