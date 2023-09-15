import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = () => {
  return (
    <div className="card-container">
      <div className="card-imageContainer">
        <Image src="/style.jpg" alt="style" fill className="image" />
      </div>
      <div className="card-textContainer">
        <div className="card-detail">
          <span className="card-date">11.02.2023 - </span>
          <span className="card-category">CULTURE</span>
        </div>
        <Link href="/">
          <h1>l;sdfk a;lsdkf alsdhf jaljdfkjl hakldfh dlskfj halsdkhfj. </h1>
        </Link>
        <p className="desc">
          asdf adsf asdf asdf asdfa sdfas fasdf asfd asdfa sfasd asdf asdf adsf
          asdf asdf asdfa sdfas fasdf asfd asdfa sfasd asdf asdf adsf asdf asdf
          asdfa sdfas fasdf asfd asdfa sfasd asdfasdf adsf asdf asdf asdfa sdfas
          fasdf asfd asdfa sfasd asdf asdf adsf asdf asdf asdfa sdfas fasdf asfd
          asdfa sfasd asdf
        </p>
        <Link href="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
