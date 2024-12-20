import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-sky-700 border shadow-md space-y-4 p-5 rounded-md m-20 w-[250px]">
      <p>Login Page</p>

      <div>
        <p>Email</p>
        <input type="email" className="border rounded-md shadow-md"/>
      </div>

      <div>
        <p>Password</p>
        <input type="password" className="border rounded-md shadow-md"/>
      </div>
      
      <div className="flex justify-center">
      <button className="bg-blue-500 text-white rounded-md p-2 shadow-md">Login</button>
      </div>




      </div>
    </>
  );
};

export default Login;
