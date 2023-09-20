import { Menu } from "@/components";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="page-container">
      <div className="page-infoContainer">
        <div className="page-textContainer">
          <h1>asdf asdf asdf aef asdf .</h1>
          <div className="page-user">
            <div className="page-userImageContainer">
              <Image src="/test1.jpg" alt="" fill className="image" />
            </div>
            <div className="page-userTextContainer">
              <span className="username">John Wick</span>
              <span className="date">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="page-imageContainer">
          <Image src="/test1.jpg" alt="" fill className="image" />
        </div>
      </div>
      <div className="page-content">
        <div className="page-post"></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
