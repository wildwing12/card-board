import React from "react";
import { Routes, Route } from "react-router-dom";
import Write from "./crud/Write";
import Home from "./Home";
import "./common/sweetAlert.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
