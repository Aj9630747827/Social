import { createContext } from "react";

export const PostsContext = createContext({
  posts: ["Hello My Fist Post", "Hello My Second Post", "Hello My Third Post"],
  handleAddPost: () => {},
  deletePost: () => {},
});
