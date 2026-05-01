import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { PostsContext } from "./store/postsContext";
import Main from "./components/Main";

function App() {
  const [posts, setPosts] = useState([]);
  function handleAddPost(post) {
    if (!post.trim()) return;
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
        <Main />
      </PostsContext.Provider>
    </>
  );
}

export default App;
