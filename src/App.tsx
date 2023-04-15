import { Home } from "./components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import {Enviroment} from "./components/Enviroment";

export default function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enviroment" element={<Enviroment />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
