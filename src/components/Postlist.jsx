import { useContext, useState } from "react";
import Post from "./Post";
import { PostsContext } from "../store/postsContext";

function Postlist() {
  const { posts } = useContext(PostsContext);
  return (
    <>
      {posts.length === 0 ? (
        <p class="fs-1 text-center">No Posts here yet!</p>
      ) : (
        <>
          <p class="fs-1 text-center">Your Posts</p>
          <ul>
            {posts.map((post, index) => (
              <li>
                <Post content={post} index={index} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
export default Postlist;
