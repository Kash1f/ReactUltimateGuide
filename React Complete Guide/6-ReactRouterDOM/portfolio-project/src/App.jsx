import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>

    {/* Code that can be fixed on top of our entire app */}
      <nav className="flex">
        <div id="nav-brand">
          <h3>Who Am I?</h3>
        </div>
        <div id="nav-options">
          <span>LINK1</span>
          <span>LINK2</span>
          <span>LINK3</span>
        </div>
      </nav>

      <div className="flex header">
        <div className="user-info">
          <h1>User Name</h1>
          <p>Hi Visitor! I am a Full Stack Developer</p>
        </div>
      
        <div className="user-pic">
          <img src="" alt="user-pic" className="img-responsive img-circle  " /> 
        </div>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        {/* When the user enters an invalid URL apart from the ones defined, this will be the page that is displayed. */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />  
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
