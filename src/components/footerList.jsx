import Link from "next/link";
import React from "react";

export const FooterList = ({ Links, Tags, Social }) => {
  return (
    <>
      {Links && (
        <div className="list">
          <span className="listTitle">Links</span>
          <Link href="/">HomePage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          <Link href="/blog">Blog</Link>
        </div>
      )}

      {Tags && (
        <div className="list">
          <span className="listTitle">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
      )}

      {Social && (
        <div className="list">
          <span className="listTitle">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      )}
    </>
  );
};
