import React, { Component } from 'react';
import '../App.css';
import TaskInput from './TaskInput'
import List from './List'
import SingleItem from './SingleItem'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      message: "",
      id: 0
    };
  }
  updateList = (item) => {
    const exists = this.state.tasks.includes(item)
    if (exists) {
      this.setState({
        message: "Task already on the list!"
      })
    } else if (item !== "") {
      this.setState({
        tasks: this.state.tasks.concat(item),
        checked: false,
        message: "",
      })
    }
  }
  removeItem(toBeRemoved) {
    let newItems = this.state.tasks.filter((item) => {
      return item !== toBeRemoved
    });
    this.setState({ tasks: newItems })
  }
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h1>To Do List</h1>
            <TaskInput updateList={this.updateList} />
            <p className="message text-danger"> {this.state.message}</p>
            <div className="col-sm-12">
              <List tasks={this.state.tasks} removeItem={this.removeItem.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
