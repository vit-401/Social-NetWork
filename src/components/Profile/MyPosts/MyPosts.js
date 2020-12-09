import React from "react";
import MyPostsCss from "./MyPosts.module.css";

const MyPosts = (props) => {
  return (
    <>
      <div className={MyPostsCss.content__postsAdded}>
        <img
          className={MyPostsCss.posts__logo}
          src="https://avatars0.githubusercontent.com/u/60542954?s=400&u=8a6e35e818005d47b1c4ecc679c6ea9bdba8a360&v=4"
          alt="pht"
        />
        <p className={MyPostsCss.post}>{props.text}</p>
        <div>{'likes: '+props.likes}</div>
      </div>
    </>
  );
};

export default MyPosts;
