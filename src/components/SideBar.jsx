import { useContext } from "react";
import { MenuContext } from "../store/menuContext";

function Sidebar({ showMenu, setShowMenu }) {
  const { activeBtn, setActiveBtn } = useContext(MenuContext);
  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 ${
          showMenu ? "d-block" : "d-none"
        } d-md-flex flex-column flex-shrink-0 full-height`}
        style={{
          width: "310px",
          maxWidth: "100%",
          position: window.innerWidth < 768 ? "fixed" : "static", // ✅ key line
          top: 0,
          left: 0,
          zIndex: 1999,
          height: "110vh",
          marginBottom: "0",
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
export default Sidebar;
