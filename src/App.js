import React, {useState,useEffect } from "react";
import "./App.css";
import FirstFormat from "./FirstFormat";
import DisplayList from "./DisplayList";
import OurButton from "./OurButton";

const App=(props)=>{
const [inputTodo,setInputTodo]=useState([])
const [List,setList]=useState([""])
const [cmBtn,setcmBtn]=useState(["Edit"])   
const [show,setShow]=useState('true') 

 const changeState = (event, index) => {
    setInputTodo( event.target.value);
  };
  useEffect(() => {
    const todoItems = localStorage.getItem('Todos')||'[]';
    // console.log(JSON.stringify(todoItems))
    setList(JSON.parse(todoItems))
}, [])

  const addText = () => {
  
  const newItem = inputTodo;
    const list1 = [...List];
    if (newItem !== "") {
      list1.push(inputTodo);
      setList(list1)
      setInputTodo("")
      localStorage.setItem('Todos', JSON.stringify(list1))
      // this.setState({
      //   list: list1,
      //   input: "",
      // });
    } else {
      alert("You should enter your comment...");
    }
  };

 const removeItem = (index) => {
    const list2 = [...List];
    console.log(list2)
    list2.splice(index, 1);
    setList(list2)
    localStorage.setItem('Todos', JSON.stringify(list2))    
  };

const showList = () => {
    const showList = show;
    setShow( !showList )
  };

  const edit = (item, index) => {    
    console.log("btn1,list",cmBtn,List)
    const cm=[...cmBtn];
     cm[index]="ok"
     console.log(item)
     setInputTodo(item)
     setcmBtn(cm)
     console.log("btn2,list2",cmBtn,List)

    // this.setState({
    //    input: item,
    //    cmBtn: cm
    //   });
    const newItem = inputTodo;
    const list1 = [...List];
    list1[index] = newItem;
    if (newItem !== "") {
      setList(list1)
      setInputTodo("")
      setcmBtn("Edit")
    }
    console.log("btn3,list3",cmBtn,List)

    localStorage.setItem('Todos', JSON.stringify(list1))
  };
    return (
      <div className="appContent">
        <OurButton
          insert={addText}
          display={showList}
          myBtn={cmBtn}
        />
        <FirstFormat
          click={(event) => changeState(event)}
          newCm={inputTodo}
        />
        {show ? ( 
        <DisplayList
            list={List}
            Delete={removeItem}
            change={edit}
            // content={cmBtn}
            myBtn={cmBtn}
          />
        ) : null}
      </div>
    );
  }
export default App;
