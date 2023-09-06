import React from "react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import Link from "next/link";
import { AuthLinks, ThemeToggle } from ".";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="social">
        <div className="icons">
          <FiFacebook className="icon face" />
          <AiOutlineInstagram className="icon insta" />
          <FiGithub className="icon github" />
        </div>
      </div>
      <div className="logo">
        <Link href="/" className="">
          LOGO HERE
        </Link>
      </div>
      <div className="links">
        <ThemeToggle />
        <Link href="#">HomePage</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};
