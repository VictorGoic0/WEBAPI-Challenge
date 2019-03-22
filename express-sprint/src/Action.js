import React from "react";

const Action = props => {
  return (
    <div className="action">
      <p>{props.action.description}</p>
      <p>{props.action.notes}</p>
    </div>
  );
};

export default Action;
