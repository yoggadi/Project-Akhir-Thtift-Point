import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">ThriftPoint</Link>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/cart" className="mx-2">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
