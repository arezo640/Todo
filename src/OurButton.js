import React from "react";

const OurButoon = (props) => {
 
  return (
 
    <div className="actionRow">
      <button
        type="button"
        class="btn btn-warning btn-lg style3"
       id="myBtn"
     // disabled={myBtn==="ok"}
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
