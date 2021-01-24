import React from "react";

const OurButoon = (props) => {
//console.log("propsbtn",props.myBtn)
  return (
     <div className="actionRow">
      <button
        type="button"
        class="btn btn-warning btn-lg style3"
       id="myBtn"
      disabled={props.isEditing==="true" }
        onClick={props.insert}
      >
        ADD
      </button>
      
      <button
        type="button"
        class="btn btn-warning btn-lg style2"
        onClick={props.display}
      >
        Show/Hide List
      </button>
    </div>
  ); 
};

export default OurButoon;
