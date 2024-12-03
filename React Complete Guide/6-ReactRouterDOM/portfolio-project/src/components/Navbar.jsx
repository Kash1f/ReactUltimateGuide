import React from 'react'

const Navbar = () => {
  return (
    <>
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
</>
  )
}

export default Navbar
