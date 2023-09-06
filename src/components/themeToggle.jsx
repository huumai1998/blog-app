import Image from "next/image";
import React from "react";
export const ThemeToggle = () => {
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
