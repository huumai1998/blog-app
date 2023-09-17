import React from "react";
import { Card, Pagination } from ".";
import Image from "next/image";

export const CardList = () => {
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
