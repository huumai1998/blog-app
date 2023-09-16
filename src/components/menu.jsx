import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Menu = () => {
  return (
    <div className="menu-container">
      <h2 className="subtitle">{"What's hot"}</h2>
      <h1 className="title">Most Popular</h1>
      <div className="items">
        <Link href="/" className="item">
          <div className="imageContainer">
            <Image src="/test1.jpg" alt="" fill className="image" />
          </div>
          <div className="textContainer">
            <span className="category travel">Travel</span>
            <h3>
              asdf adfa asf asdf asdf asf awfas fas af qawf asd as asdf asdf
              awfe asd{" "}
            </h3>
            <div className="detail">
              <span className="username">Nick Young</span>
              <span className="date">18.10.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
