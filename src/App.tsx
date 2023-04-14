import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
