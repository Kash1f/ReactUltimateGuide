import axios from "axios";
import React from "react";
import { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  const getProfileData = () => {
    //get the token from localstorage
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("", header)
      .then((res) => {
        setUserData(res.data);
        console.log("Profile Data", res);
      })
      .catch((err) => {
        alert("You are not logged in");
        console.log("Profile Data Failed", err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout Successful");
    setUserData(); //clear the user data
  };

  return (
    <div>
      <p>My Profile</p>
      <button
        className="bg-blue-400 text-white px-3 py-1"
        onClick={getProfileData}
      >
        Get Profile Data
      </button>
      <button
        className="bg-amber-400 text-white px-3 py-1 rounded-md shadow-md"
        onClick={handleLogout}
      >
        Logout
      </button>

        {userData &&

      <div className="space-y-4 text-white"> 
        <p>Name: {userData?.name || "N/A"}</p>
        <p>Email: {userData?.email || "N/A"}</p>
        <p>Role: {userData?.role || "N/A"}</p>
        <img className="rounded-full h-10 w-10" src={userData?.avatar} alt="Avatar" />
      </div>
  }
    </div>
        
  );
};

export default Profile;

//Jese hi login ho user ka data idhar is Profile page pe show hojai
