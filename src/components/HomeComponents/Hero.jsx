import { useContext } from "react";
import { MenuContext } from "../../store/menuContext";
import logo from "../../assets/logo.png";

function Hero() {
  const { setActiveBtn } = useContext(MenuContext);
  return (
    <>
      <div className="container my-4 my-md-5">
        <div className="row align-items-center rounded-3 border shadow-lg p-3 p-md-4 p-lg-5">
          {/* Left Content */}
          <div className="col-12 col-lg-7 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-5 display-md-4 fw-bold lh-1">
              Social – Express. Connect. Inspire.{" "}
            </h1>

            <p className="lead">
              Social is a place where ideas come alive and voices are heard.
              Share your thoughts, explore diverse perspectives, and connect
              with people through meaningful posts. Whether you're here to
              write, read, or engage, Social brings conversations closer.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-center justify-content-md-start">
              <button
                className="btn btn-primary btn-lg px-4 fw-bold"
                onClick={(e) => {
                  setActiveBtn("createPost");
                }}
              >
                Create Post
              </button>

              <button
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={(e) => {
                  setActiveBtn("posts");
                }}
              >
                Show Posts
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-12 col-lg-5 text-center">
            <img
              src={logo}
              alt="logo"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
