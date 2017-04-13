import React from 'react';

const TodoListItem = (props) => {
  return (
    <li className="list-group-item clearfix">
      <span>{props.todo}</span>
      <span className="pull-xs-right">
        <button className="btn btn-danger" onClick={() => props.onDeleteTodo(props.index)}>Delete</button>
      </span>
    </li>
  );
};

export default TodoListItem;
