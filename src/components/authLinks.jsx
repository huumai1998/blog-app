"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const AuthLinks = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  const [burger, setBurger] = useState("");
  const [change, setChange] = useState("");

  useEffect(() => {
    setBurger("burger");
  }, []);

  const setOpenHandler = () => {
    setOpen(!open);
    if (!open) {
      setChange("change");
    } else {
      setChange("");
    }
  };
  return (
    <>
      {status === "unauthenticated" ? (
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
          <span className="logout-link" onClick={signOut}>
            Logout
          </span>
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
          {status === "unauthentiated" ? (
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
