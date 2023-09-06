import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
export const ThemeToggle = () => {
  return (
    <div className="theme-container">
      <BsMoon />
      <div className="ball"></div>
      <BsSun />
    </div>
  );
};
