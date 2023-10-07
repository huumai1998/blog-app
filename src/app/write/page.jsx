"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Write = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   setOpen(!open);
  // });
  return (
    <div className="page-container">
      <input type="text" placeholder="Title" />
      <div className="editor">
        <button className="write-page-button" onClick={() => setOpen(!open)}>
          <AiOutlinePlusCircle className="plus-image" />
        </button>
        {open && (
          <div className="add">
            <button className="write-page-button">
              <AiOutlinePlusCircle className="plus-image" />
            </button>{" "}
            <button className="write-page-button">
              <AiOutlinePlusCircle className="plus-image" />
            </button>{" "}
            <button className="write-page-button">
              <AiOutlinePlusCircle className="plus-image" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Write;
