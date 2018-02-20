import React, { Component } from 'react';
import SingleItem from './SingleItem'

class List extends Component {
  render() {
    let itemsJSX = this.props.tasks.map((item, i) => {
      return <SingleItem key={i} item={item} removeItem={this.props.removeItem.bind(null, item)} />
    })
    return (
      <ul>
        {itemsJSX}
      </ul>
    );
  }
}
export default List;