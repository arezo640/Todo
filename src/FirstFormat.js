import React from "react";

const FirstFormat = (props) => {
  return (
    <div>
      <input
        class="form-group input-lg col-xs-4 stylee"
        onChange={props.click}
        value={props.newCm}
        placeholder="Please enter your comment..."
      />
      <br></br>
    </div>
  );
};

export default FirstFormat;
