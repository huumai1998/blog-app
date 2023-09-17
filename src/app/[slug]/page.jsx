import { Menu } from "@/components";
import React from "react";

const SinglePage = () => {
  return (
    <div className="page-container">
      <div className="page-infoContainer"></div>
      <div className="page-content">
        <div className="page-post"></div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
