import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>

    {/* Code that can be fixed on top of our entire app */}
    
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        {/* When the user enters an invalid URL apart from the ones defined, this will be the page that is displayed. */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />  
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
