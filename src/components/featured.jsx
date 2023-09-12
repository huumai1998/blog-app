import Image from "next/image";
import React from "react";

export const Featured = () => {
  return (
    <div className="feature-container">
      <h1 className="feature-title">
        <b>Hey, It is dev here!</b>
      </h1>
      <div className="feature-post">
        <div className="feature-imgContainer">
          <Image src="/test1.jpg" alt="" fill />
        </div>
        <div className="feature-textContainer">
          <h1>Something write here! this is title of page</h1>
          <p>Something here this is text pages</p>
        </div>
      </div>
    </div>
  );
};
