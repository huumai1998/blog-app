import Image from "next/image";
import React from "react";
import { FooterList } from "./footerList";
import { data } from "@/data";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="info">
        <div className="logo">
          <Image
            className="image"
            src="/test1.jpg"
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className="logoText">Logo here</h1>
        </div>
        <p className="desc">{data.desc}</p>
      </div>

      {/* Links List */}
      <div className="links">
        <FooterList Links={true} />
        <FooterList Tags={true} />
        <FooterList Social={true} />
      </div>
    </div>
  );
};
