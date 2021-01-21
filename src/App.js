import React, { Component } from "react";
import "./App.css";
import FirstFormat from "./FirstFormat";
import DisplayList from "./DisplayList";
import OurButton from "./OurButton";

class App extends Component {
  state = {
    input: "",
    list: ["arezoo"],
    show: true,
    cmBtn:["Edit"],
  };

  changeState = (event, index) => {
    this.setState({ input: event.target.value });
  };
  addText = () => {
    const newItem = this.state.input;
    const list1 = [...this.state.list];
    if (newItem !== "") {
      list1.push(this.state.input);
      this.setState({
        list: list1,
        input: "",
      });
    } else {
      alert("You should enter your comment...");
    }
  };

  removeItem = (index) => {
    const list2 = this.state.list;
    list2.splice(index, 1);
    this.setState({
      list: list2,
    });
  };

  showList = () => {
    const showList = this.state.show;
    this.setState({ show: !showList });
  };

  edit = (item, index) => {
    
  //   this.setState({ 
  // input:item ,
  // cmBtn:"ok"})
 //console.log(item,index)
    const cm=[...this.state.cmBtn];
     cm[index]="ok"
    // console.log("cmBtn1",this.state.cmBtn)
     //console.log("cm",cm)

    this.setState({
       input: item,
       cmBtn: cm
      });
  //  console.log("cmBtn2",this.state.cmBtn)
   
    const newItem = this.state.input;
    const list1 = [...this.state.list];
    list1[index] = newItem;
    if (newItem !== "") {
      this.setState({
        list: list1,
        input: "",
        cmBtn: "Edit",
      });
//      console.log("cmBtn4",this.state.cmBtn) 
    }
  };
  render() {
    return (
      <div className="appContent">
        <OurButton
          insert={this.addText}
          display={this.showList}
          myBtn={this.state.cmBtn}
        />
        <FirstFormat
          click={(event) => this.changeState(event)}
          newCm={this.state.input}
        />
        {this.state.show ? (
          <DisplayList
            list={this.state.list}
            Delete={this.removeItem}
            change={this.edit}
            content={this.state.cmBtn}
            myBtn={this.state.cmBtn}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
