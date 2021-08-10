import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../css/blog.css";
import { BlogContext } from "./CreatePosts";
import { UserContext } from "./GlobalContext";
const Blog = () => {
  const {blogs} = useContext(BlogContext);
  const { user } = useContext(UserContext);
  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        {blogs.map((item, indx) => {
          return (
            <div key={indx} className="post-wrapper">
              <img src={blogs[indx].image} alt="thumbnail" />
              <div className="title">
                 <Link className = "Link" to={`/blog/${indx}`}><h2> {blogs[indx].title}</h2> </Link>
    </div>
              <div className="content">{blogs[indx].body}</div>
              <Link to={`/blog/${indx}`}> load more</Link>
              <div className="author">
                {user && (
                  <>
                    <span>Author:</span> <strong>{user}</strong>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
