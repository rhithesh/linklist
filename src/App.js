import React from "react";
import { Route, Routes, Link, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Settings from "./components/Settings";
import LinkList from "./components/LinkList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hithesh</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
