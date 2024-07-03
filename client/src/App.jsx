import React, { lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<>contact</>} />
      </Routes>
    </Router>
  );
}

export default App;
