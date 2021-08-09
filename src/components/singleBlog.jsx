import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "./CreatePosts";
import "../css/singleBlog.css";
const SingleBlog = () => {
  const { id } = useParams();
  const { addItem } = useContext(BlogContext);
  return (
    <div className="single-blog-container">
      <div className="single-blog-wrapper">
        <img src={addItem[id].image} className="feature-image" />
        <h1 className="single-blog-title">{addItem[id].title}</h1>
        <div className="single-blog-body">{addItem[id].body}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
