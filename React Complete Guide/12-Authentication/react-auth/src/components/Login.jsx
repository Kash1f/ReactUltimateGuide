import React, { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    console.log(payload);
    
  };

  return (
    <>
      <div className="bg-sky-700 border shadow-md space-y-4 p-5 rounded-md m-20 w-[250px]">
      <p className="font-semibold text-center">Login Page</p>

      <div>
        <p>Email</p>
        <input onChange={(e)=>setEmail(e.target.value)}  type="email" className="border rounded-md shadow-md"/>
      </div>

      <div>
        <p>Password</p>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="border rounded-md shadow-md"/>
      </div>
      
      <div className="flex justify-center">
      <button onClick={handleSubmit} className="bg-blue-500 text-white rounded-md px-4 py-1 shadow-md">Login</button>
      </div>




      </div>
    </>
  );
};

export default Login;


//jo bhi user type karega wo setEmail and setPassword me store hoga then email and password state variables me aur humay screen pe show hojaiga

//jab button k click pe handleSubmit run hoga to email and password ki jo setEmail and setPassword se value aayi hogi wo value in dono current variables me ajaigi