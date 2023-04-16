import { Home } from "./components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Fun } from "./components/Fun";
import { Blog } from "./components/blog/Blog";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
