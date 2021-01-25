import React, { useState, useEffect } from "react";
import "./App.css";
import FirstFormat from "./FirstFormat";
import DisplayList from "./DisplayList";
import OurButton from "./OurButton";

const updateLocal = (ls) => localStorage.setItem("Todos", JSON.stringify(ls));
const getList = () => JSON.parse(localStorage.getItem("Todos"));

const App = (props) => {
  const [newItem, setNewItem] = useState([]);
  const [List, setList] = useState([]);
  const [show, setShow] = useState(true);
  const [editIndex, setEditIndex] = useState(true);
  const [isEditing, setEditing] = useState(false);

  const changeState = (event) => {
    setNewItem(event.target.value);
  };

  useEffect(() => {
    let todoItems = getList();
    if (todoItems) setList(todoItems);
  }, []);

  const addItem = () => {
    if (newItem !== "") {
      const list1 = [...List];
      list1.push(newItem);
      setList(list1);
      setNewItem("");
      updateLocal(list1);
    } else alert("You should enter your comment...");
  };

  const removeItem = (index) => {
    const list2 = [...List];
    list2.splice(index, 1);
    setList(list2);
    updateLocal(list2);
  };

  const toggleList = () => setShow(!show);

  const edit = (item, index) => {
    console.log("1inputtodo,item,List", newItem, item, List);
    setNewItem(item);
    setEditing(true);
    setEditIndex(index);

    if (newItem) console.log("yes", newItem);
    else console.log("no", newItem);

    //  const list3=[...List]
    //  list3[index]=inputTodo
    //   setList(list3)
    //   localStorage.setItem('Todos', JSON.stringify(list3))
  };

  const UpdateItem = () => {
    let ls = List;
    ls[editIndex] = newItem;
    setList(ls);
    updateLocal(ls);
    setEditIndex(null);
    setEditing(false);
  };

  return (
    <div className="appContent">
      <OurButton
        insert={addItem}
        display={toggleList}
        isEditing={isEditing}
        list={List}
        update={UpdateItem}
      />
      <FirstFormat click={changeState} newCm={newItem} />
      {show && (
        <DisplayList
          list={List}
          Delete={removeItem}
          onEdit={edit}
          selectedIndex={editIndex}
        />
      )}
    </div>
  );
};
export default App;
