import { useState } from "react";

function SideBar() {
  const [activeBtn, setActiveBtn] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Toggle button only for small screens */}
      <div className="d-md-none p-2 bg-dark">
        <button
          className="btn btn-primary"
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰ Menu
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 min-vh-100 ${
          showMenu ? "d-block" : "d-none"
        } d-md-flex flex-column flex-shrink-0`}
        style={{
          width: "310px",
          maxWidth: "100%",
        }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 text-white text-decoration-none justify-content-center"
        >
          <span className="fs-4 fw-bold">Options</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-2">
            <button
              onClick={() => {
                setActiveBtn("home");
                setShowMenu(false);
              }}
              className={`nav-link text-white sidebar_btn w-100 text-start ${
                activeBtn === "home" ? "active_btn" : ""
              }`}
            >
              Home
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => {
                setActiveBtn("createPost");
                setShowMenu(false);
              }}
              className={`nav-link text-white sidebar_btn w-100 text-start ${
                activeBtn === "createPost" ? "active_btn" : ""
              }`}
            >
              Create Post
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => {
                setActiveBtn("posts");
                setShowMenu(false);
              }}
              className={`nav-link text-white sidebar_btn w-100 text-start ${
                activeBtn === "posts" ? "active_btn" : ""
              }`}
            >
              Available Posts
            </button>
          </li>
        </ul>

        <hr />
      </div>
    </>
  );
}

export default SideBar;
