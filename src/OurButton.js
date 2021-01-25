import React from "react";

const OurButoon = ({ isEditing, insert, update, display }) => {
  //console.log("propsbtn",props.myBtn)
  return (
    <div className="actionRow">
      {isEditing ? (
        <button
          type="button"
          class="btn btn-warning btn-lg style3"
          id="myBtn"
          onClick={update}
        >
          Update
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-warning btn-lg style3"
          id="myBtn"
          onClick={insert}
        >
          ADD
        </button>
      )}

      <button
        type="button"
        class="btn btn-warning btn-lg style2"
        onClick={display}
      >
        Show/Hide List
      </button>
    </div>
  );
};

export default OurButoon;
