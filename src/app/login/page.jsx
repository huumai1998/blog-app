"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="loading">Loading ...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="login-page-container">
      <div className="login-page-wrapper">
        <div className="socialButton" onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className="socialButton">Sign in with Github</div>
        <div className="socialButton">Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Login;
