import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostsContext } from "../store/postsContext";

function Post({ content, index }) {
  const { deletePost } = useContext(PostsContext);
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {/* Title */}
        <h5 className="card-title text-break">Post</h5>

        {/* Content */}
        <p className="card-text text-break">{content}</p>

        {/* Button */}
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-danger d-flex align-items-center gap-2"
            onClick={(e) => {
              deletePost(index);
            }}
          >
            <span className="d-none d-md-inline">Delete</span>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
