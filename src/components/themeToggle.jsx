"use client";

import { ThemeContext } from "@/context/themeContext";
import Image from "next/image";
import React, { useContext } from "react";
import { Moon, Sun } from "../../public";
export const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div
      className="theme-container"
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={Moon} className="moon" alt="moon" width={20} height={20} />
      <div
        className="ball"
        style={
          theme === "dark"
            ? { left: 0, background: "#0f172a" }
            : { right: 0, background: "white" }
        }
      ></div>
      <Image src={Sun} alt="sun" className="sun" width={20} height={20} />
    </div>
  );
};
