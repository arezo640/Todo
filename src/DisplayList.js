import React from "react";

const DisplayList = ({ Delete, change, myBtn, list }) => {
  return (
    
    <ul>
      {list.map((item, index) => (
        <li class="styleLi" key={index}>
          {item}
          <div style={{ marginLeft: 20 }}>
            <button
              type="button"
              class="btn btn-warning styleDel"
              onClick={() => Delete(index)}
            >
              x
            </button>
            &nbsp;
            <button
              type="button"
              class="btn btn-warning styleEdit disable"
              onClick={() => change(item, index)}
            >
              
              {myBtn[index] === "ok" ? "OK" : "Edit"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;
