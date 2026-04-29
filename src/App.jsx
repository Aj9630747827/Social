import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Header />
      <SideBar />
    </>
  );
}

export default App;
