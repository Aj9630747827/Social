import { IoIosSend } from "react-icons/io";

function PostForm() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-9">
            <div class="input-group mb-3 w-100">
              <input
                type="text"
                class="form-control"
                placeholder="Write Your Post"
                aria-label="Post"
                aria-describedby="button-addon2"
              />
            </div>
          </div>

          <div class="col-2">
            <div className="d-grid d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-success w-100 w-md-auto d-flex align-items-center justify-content-center gap-2"
                type="button"
              >
                <span className="d-none d-md-inline">Post</span>
                <IoIosSend />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostForm;
