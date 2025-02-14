import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userData, setUserData] = useState({});

  const token = JSON.parse(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout Successful");
    setUserData({});
  };

  return (
    <div className="h-10 bg-blue-300 flex justify-center space-x-4 items-center">
      <Link className="hover:border-b hover:border-red-400" to={"/"}>
        Home
      </Link>
      <Link className="hover:border-b hover:border-red-400" to={"/profile"}>
        Profile
      </Link>
      {token ? (
        <button
          onClick={handleLogout}
          className="bg-amber-400 text-white px-3 py-1 rounded-md shadow-md"
        >
          {" "}
          Logout
        </button>
      ) : (
        <Link className="hover:border-b hover:border-red-400" to={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};

export default Header;
