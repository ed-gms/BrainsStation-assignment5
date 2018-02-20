import React, { Component } from 'react';


class SingleItem extends Component {
  render() {

    return (
      <li className="list-group-item">
        <div>
          <input type="checkbox" className="markDone" aria-label="Checkbox for following text input" />
          <label>
            {this.props.item}
          </label>
          <button onClick={this.props.removeItem} type="button" className="close">&times;</button>
        </div>
      </li>
    );

  }
}
export default SingleItem;