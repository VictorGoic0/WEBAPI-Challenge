import React from "react";
import Action from "./Action";

const Actions = props => {
  return (
    <div>
      {props.actions.map(action => (
        <Action action={action} />
      ))}
    </div>
  );
};

export default Actions;
