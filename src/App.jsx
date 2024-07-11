import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import Main from "./components/Main/Main";
import './App.css'

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </>
  );
};

export default App;
