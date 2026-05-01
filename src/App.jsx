import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { PostsContext } from "./store/postsContext";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  function handleAddPost({ title, content }) {
    if (!content.trim() || !title.trim()) return;

    setPosts((currPost) => [...currPost, { title: title, post: content }]);
  }

  function deletePost(index) {
    setPosts((currVal) => currVal.filter((_, i) => i !== index));
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        handleAddPost,
        deletePost,
      }}
    >
      {/* 🔥 IMPORTANT LAYOUT FIX */}
      <div className="d-flex flex-column min-vh-100">
        <Header />

        {/* Main grows to push footer down */}
        <div className="flex-grow-1">
          <Main />
        </div>

        <Footer />
      </div>
    </PostsContext.Provider>
  );
}

export default App;
