import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ButtonAppBar from "./Components/AppBar/AppBar";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
