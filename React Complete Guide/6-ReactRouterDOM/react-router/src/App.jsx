import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<div>Error 404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;



//Here we have defined the routes for the app, Navbar rendered at the top of the page, and the Home, Projects, and Contact pages rendered below the Navbar because we want the Navbar to be fixed at the top of the page. And, we want the Home, Projects, and Contact pages to be rendered below the Navbar. In Navbar, we have defined the routes for the Home, Projects, and Contact pages using the Link component. The Link component is used to create links between the routes i.e the pages.
// <BrowserRouter>
//   <Navbar />
//   <Routes>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/projects" element={<Projects />}></Route>