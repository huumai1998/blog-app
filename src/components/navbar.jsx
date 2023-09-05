import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="social">
        <Image src="./facebook.png" />
      </div>
      <div className="logo"></div>
      <div className="link"></div>
    </div>
  );
};
