import React from "react";
import "./BlogPost.css";

function BlogPost() {
  return (
    <div className="blog-post-card">
      <div>
        <span> Blog Image</span>
      </div>

      <div className="blog-content">
        <h2 className="blog-title"> Learn React Components</h2>

        <div className="blog-meta">
          <span className="blog-author"> By Mahboba</span>
          <span className="blog-separator"> .</span>
          <span className="blog-data"> Oct 2, 2026</span>
        </div>

        <p className="blog-description">
          Learn the basics of React components and JSX...
        </p>

        <button className="blog-read-more-btn"> Read More</button>
      </div>
    </div>
  );
}

export default BlogPost;
