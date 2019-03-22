import React from "react";

const Project = props => {
  return (
    <div className="action">
      <p>{props.project.name}</p>
      <p>{props.project.description}</p>
    </div>
  );
};

export default Project;
