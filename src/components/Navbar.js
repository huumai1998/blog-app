import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header>
      <h3>LOGO</h3>
      <nav>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};
