import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CategoryList = () => {
  return (
    <div className="categories-container">
      <h1 className="title">Popular Categories</h1>
      <div className="categories">
        <Link href="/blog?cat=style" className="category style">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Style
        </Link>
        <Link href="/blog?cat=style" className="category fashion">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Fashion
        </Link>
        <Link href="/blog?cat=style" className="category food">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Food
        </Link>
        <Link href="/blog?cat=style" className="category travel">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Travel
        </Link>
        <Link href="/blog?cat=style" className="category culture">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Culture
        </Link>
        <Link href="/blog?cat=style" className="category coding">
          <Image
            src="/style.jpg"
            alt="style"
            width={32}
            height={32}
            className="categories-image"
          />
          Coding
        </Link>
      </div>
    </div>
  );
};
