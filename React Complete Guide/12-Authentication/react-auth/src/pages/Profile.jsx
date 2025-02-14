import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    getProfileData();
  },[])

  const getProfileData = () => {
    //get the token from localstorage
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setUserData(res.data);
        console.log("Profile Data", res);
      })
      .catch((err) => {
        alert("You are not logged in");
        console.log("Profile Data Failed", err);
      });
  };

  return (
    <div>
      {/* the && operator is used for conditional rendering in JSX. It ensures that the content inside the parentheses is only rendered if userData is truthy */}
      {userData && (
        <div className="space-y-4 text-white">
          <p>Name: {userData?.name || "N/A"}</p>
          <p>Email: {userData?.email || "N/A"}</p>
          <p>Role: {userData?.role || "N/A"}</p>
          <img
            className="rounded-full h-10 w-10"
            src={userData?.avatar}
            alt="Avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;

//Jese hi login ho user ka data idhar is Profile page pe show hojai
