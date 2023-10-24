import { Menu } from "@/components";
import Image from "next/image";
import React from "react";
import { Comments } from "./components";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="page-container">
      <div className="page-infoContainer">
        <div className="page-textContainer">
          <h1 className="title">{data?.user.title}</h1>
          <div className="page-user">
            <div className="page-userImageContainer">
              {data?.user?.image && (
                <Image src={data.user.image} alt="" fill className="avatar" />
              )}
            </div>
            <div className="page-userTextContainer">
              <span className="username">{data?.user.name}</span>
              <span className="date">{data.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="page-imageContainer">
            <Image src={data.img} alt="" fill className="image" />
          </div>
        )}
      </div>
      <div className="page-content">
        <div className="page-post">
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="slug-page-comment">
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
