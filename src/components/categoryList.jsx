import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CategoryList = () => {
  return (
    <div className="categories-container">
      <h1 className="categories-title">Popular Categories</h1>
      <div className="categories">
        <Link href="/blog?cat=style" className="catetory style">
          <Image src="/" width={32} height={32} className="categories-image" />
          Style
        </Link>
      </div>
    </div>
  );
};
