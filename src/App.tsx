import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { About } from "./components/About";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
