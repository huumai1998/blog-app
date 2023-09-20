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
          <Image src="/test1.jpg" alt="" fill className="feature-image" />
        </div>
        <div className="feature-textContainer">
          <h1 className="feature-postTitle">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="feature-postDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            adipisci iusto magnam perspiciatis consequatur sint, quis cupiditate
            ea voluptate officiis autem, sequi tempora, vitae dolorem. Rerum eum
            maiores facilis officiis?
          </p>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
};
