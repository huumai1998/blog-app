import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MenuPost = ({ withImage, withTitle }) => {
  return (
    <div>
      {withTitle == true ? (
        <>
          <h2 className="subtitle">{"What's hot?"}</h2>
          <h1 className="title">Most Popular</h1>
        </>
      ) : (
        <>
          <h2 className="subtitle">{"Chosen by the editor"}</h2>
          <h1 className="title">Editors Pick</h1>
        </>
      )}
      <div className="items">
        <Link href="/" className="item">
          {withImage && (
            <div className="imageContainer">
              <Image src="/test1.jpg" alt="" fill className="image" />
            </div>
          )}
          <div className="textContainer">
            <span className="category travel">Travel</span>
            <h3 className="posTitle">
              asdf adfa asf asdf asdf asf awfas fas af qawf asd as asdf asdf
              awfe asd{" "}
            </h3>
            <div className="detail">
              <span className="username">Nick Young - </span>
              <span className="date">18.10.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
