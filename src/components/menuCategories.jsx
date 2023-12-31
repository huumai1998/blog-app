import Link from "next/link";
import React from "react";

export const MenuCategories = () => {
  return (
    <>
      {/* Category */}
      <h2 className="subtitle">{"Discover by topic"}</h2>
      <h1 className="title">Categories</h1>
      <div className="categoryList">
        <Link href="/blog?cat=style" className="categoryItem style">
          Style
        </Link>

        <Link href="/blog?cat=fashion" className="categoryItem fashion">
          Fashion
        </Link>

        <Link href="/blog?cat=food" className="categoryItem food">
          Food
        </Link>

        <Link href="/blog?cat=travel" className="categoryItem travel">
          Travel
        </Link>

        <Link href="/blog?cat=culture" className="categoryItem culture">
          Culture
        </Link>

        <Link href="/blog?cat=coding" className="categoryItem coding">
          Coding
        </Link>
      </div>
    </>
  );
};
