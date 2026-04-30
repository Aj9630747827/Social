import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { PostsContext } from "./store/postsContext";

function App() {
  const [posts, setPosts] = useState([]);
  function handleAddPost(post) {
    if (post.length === 0) return;
    setPosts((currPost) => {
      const newList = [...currPost, post];
      return newList;
    });
  }
  function deletePost(index) {
    setPosts((currVal) => {
      let newItems = currVal.filter((item, index2) => {
        return index2 !== index;
      });
      return newItems;
    });
  }
  return (
    <>
      <PostsContext.Provider
        value={{
          posts,
          handleAddPost,
          deletePost,
        }}
      >
        <Header />
        <SideBar />
      </PostsContext.Provider>
    </>
  );
}

export default App;
