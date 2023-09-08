"use client";

import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import React, { useContext } from "react";
export const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className="theme-container">
      <Image
        src="/moon.png"
        className="moon"
        alt="moon"
        width={20}
        height={20}
      />
      <div className="ball"></div>
      <Image src="/sun.png" alt="sun" className="sun" width={20} height={20} />
    </div>
  );
};
