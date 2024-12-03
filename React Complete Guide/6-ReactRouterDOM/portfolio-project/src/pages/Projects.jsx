import React from "react";

const Projects = () => {
  return (
    <>
      <h2>My Projects</h2>
      {/* we want all the items to be flexed */}
      <div className="flex">
        {/* first div for project 1 */}
        <div>
            <h3>Project 1</h3>
            {/* division to add an image */}
            <div>
                <img src="" alt="project-1" className="img-responsive img-circle" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
