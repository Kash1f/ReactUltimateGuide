import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-10 bg-blue-300 flex justify-center space-x-4 items-center">

      <Link className="hover:border-b hover:border-red-400" to={"/"}>Home</Link>
      <Link className="hover:border-b hover:border-red-400" to={"/login"}>Login</Link>
      <Link className="hover:border-b hover:border-red-400" to={"/profile"}>Profile</Link>
    </div>
  );
};

export default Header;
