import "./App.css";
import Header from "./components/Header";
import PostsContextProvider from "./store/postsContext";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <PostsContextProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Main />
        </div>
        <Footer className="w-100" />
      </div>
    </PostsContextProvider>
  );
}

export default App;
