"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiImageAdd, BiLinkExternal } from "react-icons/bi";

const Write = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setOpen(!open);
  // });
  return (
    <div className="page-container">
      <input type="text" placeholder="Title" />
      <div className="editor">
        <button className="button plus-button" onClick={() => setOpen(!open)}>
          <AiOutlinePlusCircle className="plus-image" />
        </button>
        {open && (
          <div className="add">
            <button className="button children">
              <BiImageAdd className="plus-image" />
            </button>{" "}
            <button className="button children">
              <BiLinkExternal className="plus-image" />
            </button>{" "}
            <button className="button children">
              <AiOutlineVideoCameraAdd className="plus-image" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Write;
