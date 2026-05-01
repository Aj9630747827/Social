import { useState } from "react";
import PostForm from "./PostForm";
import Postlist from "./Postlist";
import { PostsContext } from "../store/postsContext";
import Home from "./Home";
import { MenuContext } from "../store/menuContext";
import Sidebar from "./SideBar";

function Main() {
  const [activeBtn, setActiveBtn] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <MenuContext.Provider
        value={{
          activeBtn,
          setActiveBtn,
        }}
      >
        {/* Toggle button (mobile) */}
        <div className="d-md-none p-2 bg-dark">
          <button
            className="btn btn-primary"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰ Menu
          </button>
        </div>
        {/* Main layout */}
        <div className="d-flex">
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
          {/* Right Side Content */}

          {activeBtn == "createPost" ? (
            <div className="flex-grow-1 p-3">
              <PostForm />
            </div>
          ) : (
            <></>
          )}
          {activeBtn == "posts" ? (
            <div className="flex-grow-1 p-3">
              {" "}
              <Postlist />
            </div>
          ) : (
            <></>
          )}
          {activeBtn == "home" ? (
            <div className="flex-grow-1 p-3">
              {" "}
              <Home />
            </div>
          ) : (
            <></>
          )}
        </div>
      </MenuContext.Provider>
    </>
  );
}

export default Main;
