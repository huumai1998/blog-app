import { Menu } from "@/components";
import { data } from "@/data";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="page-container">
      <div className="page-infoContainer">
        <div className="page-textContainer">
          <h1 className="title">Lorem ipsum dolor sit</h1>
          <div className="page-user">
            <div className="page-userImageContainer">
              <Image src="/test1.jpg" alt="" fill className="avatar" />
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
        <div className="page-post">
          <div className="description">
            <p>{data.desc}</p>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fuga unde dolor, atque praesentium assumenda et eos labore ea sed
              quia voluptatibus optio? Tempora voluptatum similique, quam odio
              aliquam blanditiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fuga unde dolor, atque praesentium assumenda et eos labore ea sed
              quia voluptatibus optio? Tempora voluptatum similique, quam odio
              aliquam blanditiis!
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
