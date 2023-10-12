import { CardList, Menu } from "@/components";
import React from "react";

const BlogPage = () => {
  return (
    <div className="page-container">
      <h1 className="title-title">Style Blog!</h1>
      <div className="page-content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
