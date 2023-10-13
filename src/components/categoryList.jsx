import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

export const CategoryList = async () => {
  const data = await getData();

  return (
    <div className="categories-container">
      <h1 className="title">Popular Categories</h1>
      <div className="categories">
        {data?.map((item) => (
          <Link href="/blog?cat=style" className="category" key={item._id}>
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className="categories-image"
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
