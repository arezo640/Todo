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
const [Editing,setEditing]=useState('false')

const changeState = (event) => {
    setInputTodo( event.target.value);
  };

useEffect(() => {
    let todoItems = localStorage.getItem('Todos');
 todoItems= JSON.parse(todoItems);
    if(todoItems)  setList(todoItems)
}, []
)

const addText = () => {
  const newItem = inputTodo;
  const list1 = [...List];
    if (newItem !== "") {
      list1.push(inputTodo);
      setList(list1)
      setInputTodo("")
      localStorage.setItem('Todos', JSON.stringify(list1))
    } 
    else
     {
      alert("You should enter your comment...");
    }
  };

 const removeItem = (index) => {
    const list2 = [...List];
    list2.splice(index, 1);
    setList(list2)
    localStorage.setItem('Todos', JSON.stringify(list2))    
  };

const showList = () => {
    const showList = show;
    setShow( !showList )
  };

const edit = (item, index) => { 
  
  console.log("1inputtodo,item,List",inputTodo,item,List)
  setInputTodo(List[index])
  const cm=[...cmBtn];
  setEditing("true")
  cm[index]="ok"
  setcmBtn(cm)
  
  if(inputTodo){
     console.log("yes",inputTodo)
   }
    else {
     console.log("no", inputTodo)
   }
//  const list3=[...List]
//  list3[index]=inputTodo
//   setList(list3)
//   localStorage.setItem('Todos', JSON.stringify(list3)) 
}
   
    return (
      <div className="appContent">
        <OurButton
          insert={addText}
          display={showList}
          isEditing={Editing}
          list={List}
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
          //  save={saving}         
            myBtn={cmBtn}
            isEditing={Editing}
                    />
        ) : null}
      </div>
    );
  }
export default App;
