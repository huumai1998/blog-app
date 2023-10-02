import Image from "next/image";
import Link from "next/link";
import React from "react";
import { test } from "../../public";

export const Comments = () => {
  const status = "authenticated";
  return (
    <>
      <div className="comment-container">
        <h1 className="title">Comments</h1>
        {status === "authenticated" ? (
          <div className="write">
            <textarea placeholder="Write a comment ..." className="input" />
            <button className="button">Send</button>
          </div>
        ) : (
          <Link href="/login">Login to write a comments</Link>
        )}
        <div className="comments">
          <div className="comment">
            <div className="user">
              <Image
                src={test}
                alt=""
                width={50}
                height={50}
                className="image"
              />
              <div className="userInfo">
                <span className="username">John</span>
                <span className="date">11.11.1111</span>
              </div>
            </div>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis dolor quae delectus reprehenderit doloremque voluptates
              maiores aut porro, exercitationem fuga consequatur vero. Omnis
              laudantium sapiente nisi et ut perferendis qui?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
