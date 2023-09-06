import Link from "next/link";
import React from "react";

export const AuthLinks = () => {
  const status = "noauthentiated";
  return (
    <>
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
    </>
  );
};
