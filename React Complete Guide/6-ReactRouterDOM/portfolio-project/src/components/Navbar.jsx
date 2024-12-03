import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <div id="nav-brand">
          <h3>Who Am I?</h3>
        </div>
        <div id="nav-options">
          <span>
            <Link to="/">Home </Link>
          </span>
          <span>
            <Link to="/projects">Projects </Link>
          </span>
          <span>
            <Link to="/contact">Contact </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
