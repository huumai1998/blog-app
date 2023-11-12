"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiImageAdd, BiLinkExternal } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/firebase";

const storage = getStorage(app);
// Write Page
const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, status } = useSession();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const router = useRouter();

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload;
  }, [file]);

  if (status === "loading") {
    return <div className="loading">Loading ...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", //If not selected, choose the general category
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="write-page-container">
      <input
        type="text"
        placeholder="Title"
        className="input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="select" onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
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
      <button className="publish" onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Write;
