import React from 'react';
import { useDispatch } from 'react-redux';

import { addTaskToDB } from '../../store/actions.js';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [formState, setState] = React.useState({
    task: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    
    setState(() => {
      return {
        [name]: value,
      }
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { task: value } = formState;

    dispatch(addTaskToDB(value));

    setState(() => {
      return {
        task: '',
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        name="task"
        value={formState.task}
        onChange={onChangeHandler}
      ></input>
      <button className="btn btn-outline-secondary">
        Add!
      </button>
    </form>
  );
}

export default AddTodo;
