import { useContext, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { PostsContext } from "../store/postsContext";

function PostForm() {
  const { handleAddPost } = useContext(PostsContext);
  const [post, setPost] = useState("");

  const handleSubmit = () => {
    if (!post.trim()) return;
    handleAddPost(post);
    setPost("");
  };

  return (
    <div className="container">
      <div className="row g-2">
        {/* Input */}
        <div className="col-12 col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="Write Your Post"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
        </div>

        {/* Button */}
        <div className="col-12 col-md-2">
          <button
            className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center gap-2"
            type="button"
            onClick={handleSubmit}
          >
            <span className="d-none d-md-inline">Post</span>
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
