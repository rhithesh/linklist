import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";

export default function App() {
  return (
    <div className="  w-[400px]  bg-black">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
