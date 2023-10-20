import { CardList, Menu } from "@/components";
import React from "react";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="page-container">
      <h1 className="title-title">{cat} Blog!</h1>
      <div className="page-content">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
