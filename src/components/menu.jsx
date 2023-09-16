import React from "react";
import { MenuPost } from "./menuPost";
import { MenuCategories } from "./menuCategories";

export const Menu = () => {
  return (
    <div className="menu-container">
      <MenuPost withTitle={true} withImage={false} />
      <MenuCategories />
      <MenuPost withTitle={false} withImage={true} />
    </div>
  );
};
