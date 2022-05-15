import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Repositories from "./pages/repositories";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/repos" element={<Repositories />} />
      </Routes>
    </Router>
  );
};
export default Rotas;
