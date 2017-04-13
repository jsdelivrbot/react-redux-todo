import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        'I need to exercise',
        'I need to sleep'
      ],
      input: ''
    };
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (!this.state.input) {
      alert('Todo cannot be blank!');
    } else {
      this.setState({ todos: this.state.todos.concat(this.state.input) });
    }
  }

  onDeleteTodo(index) {
    const todos = this.state.todos;
    this.setState({ todos: [...todos.slice(0, index), ...todos.slice(index + 1)] });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div>Todo List</div>
          <div className="form-group">
            <label>Add a todo:</label>
            <input type="text" value={this.state.input} onChange={e => this.setState({ input: e.target.value })} className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
