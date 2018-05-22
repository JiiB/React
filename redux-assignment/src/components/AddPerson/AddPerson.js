import React from "react";

import "./AddPerson.css";

const addPerson = props => {
  console.log(props);
  return (
    <div className="AddPerson">
      <button
        onClick={() =>
          props.clicked({
            id: Date.now(),
            name: "Max",
            age: Math.floor(Math.random() * 40)
          })
        }
      >
        Add Person
      </button>
    </div>
  );
};

export default addPerson;
