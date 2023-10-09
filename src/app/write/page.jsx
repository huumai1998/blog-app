"use client";
import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiImageAdd, BiLinkExternal } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

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
              <LiaPhotoVideoSolid className="plus-image" />
            </button>
          </div>
        )}
        <ReactQuill theme="snow" />
      </div>
    </div>
  );
};

export default Write;
