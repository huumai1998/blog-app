"use client";
import Link from "next/link";
import React, { useState } from "react";

export const AuthLinks = () => {
  const status = "noauthentiated";
  const [open, setOpen] = useState(false);
  const [burger] = useState("burger");
  const [change, setChange] = useState("");

  const setOpenHandler = () => {
    if (!open) {
      setOpen(!open);
      setChange("change");
    } else {
      setOpen(!open);
      setChange("");
    }
  };
  return (
    <>
      {status === "noauthentiated" ? (
        <>
          <Link href="/login" className="link">
            Login
          </Link>
        </>
      ) : (
        <>
          <Link href="/write" className="link">
            Write
          </Link>
          <span className="link">Logout</span>
        </>
      )}
      <div className={`${burger} ${change}`} onClick={setOpenHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      {open && (
        <div className="responsiveMenu">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "noauthentiated" ? (
            <>
              <Link href="/login">Login</Link>
            </>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className="logout-link">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
