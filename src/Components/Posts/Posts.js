import React, { useContext } from "react";
import { ContextProvider } from "../../Global/Context";
import Commnets from "../Comments/Commnets";
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  // console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts_header">
            <div className="posts_header-avator">{post.userName[0]}</div>
            <div className="posts_header-name">{post.userName}</div>
          </div>
          <div className="posts_img">
            <img src={post.image} alt={post.title} />
          </div>
          <Commnets id={post.id} />
        </div>
      ))}
    </>
  );
};

export default Posts;
