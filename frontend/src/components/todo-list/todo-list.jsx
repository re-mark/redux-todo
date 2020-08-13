import React, { useEffect } from 'react';
import ListItem from '../todo-list-item/todo-list-item.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../store/actions.js';

import './todo-list.css';

const ToDoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => (state.tasks));
  
  useEffect(() => {
    dispatch(getTasks());
  }, []);


  return (
    <ul className="list-group todo-list">
      {tasks.length ? 
        tasks.map((el) => {
          return <li key={el._id} className="list-group-item"><ListItem task={el}/></li>
        }) :
        <li style={{textAlign: "center"}} className="list-group-item">Add Your First Task!</li>
      }
    </ul>
  )
}

export default ToDoList;
