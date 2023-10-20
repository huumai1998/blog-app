import { data } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({ key, item }) => {
  return (
    <div className="card-container" key={key}>
      <div className="card-imageContainer">
        {item.img && (
          <Image src={item.img} alt="style" fill className="image" />
        )}
      </div>
      <div className="card-textContainer">
        <div className="card-detail">
          <span className="card-date">{item.createAt.substring(0, 10)} - </span>
          <span className="card-category">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className="desc">{data.desc}</p>
        <Link href={`/posts/${item.slug}`} className="button">
          {item.desc.substring(0, 60)}
        </Link>
      </div>
    </div>
  );
};
