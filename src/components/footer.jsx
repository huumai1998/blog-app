import Image from "next/image";
import React from "react";
import { FooterList } from "./footerList";

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
        <p className="desc">af asdfj lkjf af al a sjdf alfj alsd</p>
      </div>

      {/* Links List */}
      <div className="links">
        <FooterList Links={true} />
      </div>

      {/* Tags List */}
      <div className="links">
        <FooterList Tags={true} />
      </div>

      {/* Social List */}

      <div className="links">
        <FooterList Social={true} />
      </div>
    </div>
  );
};
