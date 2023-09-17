import { CardList, Menu } from "@/components";
import React from "react";

export const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <h1 className="title">Style Blog</h1>
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};
