import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <form>
          <div>Todo List</div>
          <div className="form-group">
            <label>Add a todo:</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
