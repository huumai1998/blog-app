"use client";
import Link from "next/link";
import React, { useState } from "react";

export const AuthLinks = () => {
  const status = "noauthentiated";
  const [open, setOpen] = useState(false);
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
      <div className="burger" onClick={() => setOpen(!open)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
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
