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
        <p className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
          repellat exercitationem earum reiciendis odio provident, quos esse
          explicabo suscipit beatae in? Expedita assumenda nobis est ea deserunt
          dolores voluptas consequuntur?
        </p>
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
