import React from "react";

const Actions = props => {
  render() {
    return (
        <div>
            <p>{props.action.description}</p>
            <p>{props.action.notes}</p>
        </div>
    )
  }
}

export default Action;