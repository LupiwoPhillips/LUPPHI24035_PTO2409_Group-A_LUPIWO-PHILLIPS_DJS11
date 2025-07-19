import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SeasonList from "./components/SeasonList";
import "./index.css"; // Ensure you have your CSS file imported

function App() {
  return (
    <div className="app-container">
      <header className="bg-indigo-600 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome To The "No Filter Needed Podcast"</h1>
        <h4 className="text-sm font-bold">Your number one PODCAST for unfiltered conversations.</h4>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<SeasonList />} />
      </Routes>
    </div>
  );
}

export default App;
