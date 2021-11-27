import "./styles.css";
import TaskList from "./TaskList.js";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: ["Zadanie1", "Zadanie2"],
      doneList: ["Zadanie3"]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onListChange = this.onListChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const taskName = e.target.elements["input"].value;
    this.setState({
      toDoList: this.state.toDoList.concat(taskName)
    });
  }
  onListChange(task, listName) {
    if (listName === "To do") {
      this.setState({
        toDoList: this.state.toDoList.filter((t, idx) => idx !== task.idx),
        doneList: this.state.doneList.concat(task.name)
      });
    } else {
      this.setState({
        toDoList: this.state.toDoList.concat(task.name),
        doneList: this.state.doneList.filter((t, idx) => idx !== task.idx)
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="Title">React state todoMVC:</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="input" type="text" placeholder="Type your todo here!" />
          <input type="submit" value="Save" />
        </form>
        <TaskList
          name="To do"
          taskList={this.state.toDoList}
          onListChange={this.onListChange}
        />
        <TaskList
          name="Done"
          taskList={this.state.doneList}
          onListChange={this.onListChange}
        />
      </div>
    );
  }
}
