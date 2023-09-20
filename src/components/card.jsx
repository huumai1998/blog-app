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
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          placeat qui debitis voluptatibus. Sit dolorum hic quae at repellendus
          repellat distinctio deserunt maxime itaque magni, voluptas suscipit,
          aperiam saepe facilis.
        </p>
        <Link href="/" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};
