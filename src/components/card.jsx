import { data } from "@/data/data";
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
          <span className="card-date">{data.date} - </span>
          <span className="card-category">CULTURE</span>
        </div>
        <Link href="/">
          <h1>{data.title}</h1>
        </Link>
        <p className="desc">{data.desc}</p>
        <Link href="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
