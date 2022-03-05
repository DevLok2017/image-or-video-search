import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SearchImage from "./components/SearchImage";
import SearchVideo from "./components/SearchVideo";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/images" element={<SearchImage />} />
        <Route path="/videos" element={<SearchVideo />} />
        <Route path="/*" element={<div>NOT FOUND</div>} />
      </Routes>
    </div>
  );
};

export default App;
