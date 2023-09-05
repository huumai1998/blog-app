import React from "react";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

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
      <div className="logo"></div>
      <div className="link"></div>
    </div>
  );
};
