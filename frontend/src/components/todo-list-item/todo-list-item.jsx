import React from 'react';
import { useDispatch } from 'react-redux';
import { delTaskFromDB, markTask } from '../../store/actions';

import './todo-list-item.css';

const ListItem = ({ task }) => {
  const dispatch = useDispatch();

  const styles = {
    textDecoration: task.isDone ? 'line-through' : 'none',
    color: task.isImportant ? 'steelblue' : 'black',
    fontWeight: task.isImportant || task.isDone ? 'bold' : 'normal',
  };

  return (
    <span className="todo-list-item">
      <span onClick={() => dispatch(markTask(task._id, 'isDone'))}
            style={styles}>
        {task.value}
      </span>
      <span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm"
        onClick={() => dispatch(markTask(task._id, 'isImportant'))}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => dispatch(delTaskFromDB(task._id))}
      >
        <i className="fa fa-trash-o" />
      </button>
      </span>
    </span>
  )
}

export default ListItem;
