import Link from "next/link";
import React from "react";

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
      </div>
    </>
  );
};
