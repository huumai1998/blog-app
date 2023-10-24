"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
// import { test } from "../../../../public";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
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
          <div className="write">
            <Link href="/login" className="write">
              Please login to write a comments
            </Link>
          </div>
        )}
        <div className="comments">
          {isLoading
            ? "loading"
            : data?.map((item) => (
                <div className="comment" key={item._id}>
                  <div className="user">
                    {item?.user?.image && (
                      <Image
                        src={item.user.image}
                        alt=""
                        width={50}
                        height={50}
                        className="image"
                      />
                    )}
                    <div className="userInfo">
                      <span className="username">{item.user.name}</span>
                      <span className="date">{item.createdAt}</span>
                    </div>
                  </div>
                  <p className="desc">{item.desc}</p>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};
