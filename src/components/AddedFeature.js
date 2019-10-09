import React from "react";

const AddedFeature = props => {
  return (
    <li>
      <button
        style={{ marginRight: "20px" }}
        onClick={props.removeFeature}
        className="delete"
      >
      </button>
      &nbsp;
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
