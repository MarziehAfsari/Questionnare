import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/About.js";
import Home from "./screens/Home.js";
import PageThree from "./screens/PageThree.js";
import Finish from "./screens/Finish.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/PageThree" element={<PageThree />} />
        <Route path="/Finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
