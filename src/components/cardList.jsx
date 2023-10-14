import React from "react";
import { Card, Pagination } from ".";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

export const CardList = async () => {
  const data = await getData();
  return (
    <div className="cardList-container">
      <h1 className="title">Recent Posts</h1>
      <div className="cardList-posts">
        <div className="cardList-post">
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  );
};
