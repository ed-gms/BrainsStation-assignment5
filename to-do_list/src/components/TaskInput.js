import React, { Component } from 'react';

class TaskInput extends Component {
  addItem = (event) => {
    event.preventDefault();
    let input = event.target.querySelector('input');
    let newItemValue = input.value;
    if (newItemValue) {
      this.props.updateList(newItemValue)
      input.value = '';
    }
  }
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type="text" name="task" placeholder="Enter New Task" />
        <button type="submit" className="btn btn-default">Add</button>
      </form>
    );

  }
}
export default TaskInput;