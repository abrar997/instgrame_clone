import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Model from "./Components/Model/Model";
import Context from "./Global/Context";
import Stories from "./Components/Stories/Stories";

const App = () => {
  return (
    <Context>
          <Navbar />
          <Model />
        <div className="container-stories">
          <Stories />
        </div>
    </Context>
  );
};

export default App;
