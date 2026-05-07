import { createContext, useState } from "react";

export const PostsContext = createContext({
  posts: [],
  handleAddPost: () => {},
  deletePost: () => {},
});
function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  function handleAddPost({ title, content }) {
    if (!content.trim() || !title.trim()) return;

    setPosts((currPost) => [...currPost, { title: title, post: content }]);
  }

  function deletePost(index) {
    setPosts((currVal) => currVal.filter((_, i) => i !== index));
  }

  return (
    <PostsContext.Provider value={{ posts, handleAddPost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
}
export default PostsContextProvider;
