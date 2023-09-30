"use client";
import React, { useEffect, useState } from "react";
// import { FiFacebook, FiGithub } from "react-icons/fi";
// import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import { AuthLinks, ThemeToggle } from ".";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      className={`nav active ${show && "hidden"}`}
      style={{ backgroundColor: "transparent" }}
    >
      <div className="nav-container">
        <div className="logo logo-typography">
          <Link href="/" className="">
            LOGO HERE
          </Link>
        </div>
        <div className="links">
          <ThemeToggle />
          <Link href="#" className="link">
            HomePage
          </Link>
          <Link href="#" className="link">
            Contact
          </Link>
          <Link href="#" className="link">
            About
          </Link>
          <AuthLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
