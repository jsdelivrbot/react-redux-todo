import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

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
      this.setState({ todos: this.state.todos.concat(this.state.input), input: '' });
    }
  }

  onDeleteTodo(index) {
    const todos = this.state.todos;
    this.setState({ todos: [...todos.slice(0, index), ...todos.slice(index + 1)] });
  }

  renderTodos() {
    return this.state.todos.map((todo, i) => {
      return <TodoListItem todo={todo} key={i} />
    });
  }

  render() {
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
        <ul className="list-group">
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}
