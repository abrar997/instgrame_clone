import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Model from "./Components/Model/Model";
import Context from "./Global/Context";
import Stories from "./Components/Stories/Stories";
import CreatePost from "./Components/Posts/CreatePost";
import Posts from "./Components/Posts/Posts";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <Context>
      <Navbar />
      <Model />
      <div className="container-stories">
        <Stories />
        <CreatePost />
        <Posts />
        <Sidebar />
      </div>
    </Context>
  );
};

export default App;
