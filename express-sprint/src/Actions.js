import React from "react";
import Action from "./Action";

const Actions = props => {
  return (
    <div>
      <h1>Actions</h1>
      {props.actions.map(action => (
        <Action action={action} />
      ))}
    </div>
  );
};

export default Actions;
