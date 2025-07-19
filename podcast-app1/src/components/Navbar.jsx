import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="text-xl font-semibold">🎙️ No Filter Needed</Link>
      </div>
    </nav>
  );
}

export default Navbar;
