"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiImageAdd, BiLinkExternal } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, status } = useSession();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const router = useRouter();

  if (status === "loading") {
    return <div className="loading">Loading ...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  // useEffect(() => {
  //   setOpen(!open);
  // });
  return (
    <div className="write-page-container">
      <input type="text" placeholder="Title" className="input" />
      <div className="editor">
        <button className="plus-button" onClick={() => setOpen(!open)}>
          <AiOutlinePlus className="plus-image" />
        </button>
        {open && (
          <div className="add">
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className="children">
              <label htmlFor="image" className="pointer">
                <BiImageAdd className="plus-image" />
              </label>
            </button>{" "}
            <button className="children">
              <BiLinkExternal className="plus-image" />
            </button>{" "}
            <button className="children">
              <LiaPhotoVideoSolid className="plus-image" />
            </button>
          </div>
        )}
        <ReactQuill
          className="textArea"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story ..."
        />
      </div>
      <button className="publish">Publish</button>
    </div>
  );
};

export default Write;
