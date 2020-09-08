import React from "react";
import MyProjects from "../components/MyProjects"

const style={
  width: '100%',
  backgroundColor: '#15796E',
}

function Projects() {
  return (
    <div style={style}>
      <MyProjects/>
    </div>
  );
}

export default Projects;