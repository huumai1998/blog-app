import { Menu } from "@/components";
import { data } from "@/data";
import Image from "next/image";
import React from "react";
import { Comments } from "./components";

const SinglePage = async () => {
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
            <p>{data.desc}</p>
            <p>{data.desc}</p>
          </div>
          <div className="slug-page-comment">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
