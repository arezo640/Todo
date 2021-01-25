import React from "react";

const DisplayList = ({ Delete, onEdit, list }) => {
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
              onClick={() => onEdit(item, index)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;
