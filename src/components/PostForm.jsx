import { useContext, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { PostsContext } from "../store/postsContext";

function PostForm() {
  const { handleAddPost } = useContext(PostsContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;

    handleAddPost({ title, content });

    setTitle("");
    setContent("");
  };

  return (
    <div className="container">
      <div className="row g-3">
        {/* Title Input */}
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Textarea */}
        <div className="col-12">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        {/* Button */}
        <div className="col-12 col-md-2 ms-auto">
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
