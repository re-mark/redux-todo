import * as actionTypes from './types.js';
const { actionTypes: { ADD_TASK, DEL_TASK, GET_TASKS, MARK_TASK } } = actionTypes;

export const addTaskAC = (value, id) => ({ type: ADD_TASK, value, id });

export const delTaskAC = (id) => ({ type: DEL_TASK, id });

export const markTaskAC = (id, flag) => ({ type: MARK_TASK, id, flag });

export const getTasksAC = (tasks) => ({ type: GET_TASKS, tasks });

export const getTasks = () => async (dispatch) => {
  const req = await fetch('http://localhost:3003/tasks');

  const { tasks } = await req.json();

  const taskToShow = tasks.filter((el) => el.isVisible);

  dispatch(getTasksAC(taskToShow));
};

export const addTaskToDB = (value) => async (dispatch) => {
  const req = await fetch('http://localhost:3003/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  const res = await req.json();

  const { newTask: { _id: id } } = res;
  
  dispatch(addTaskAC(value, id));
};

export const delTaskFromDB = (id) => async (dispatch) => {
  const req = await fetch(`http://localhost:3003/tasks/${id}`, {
    method: 'DELETE',
  });
  const res = await req.json();

  const { success } = res;
  
  if (success) dispatch(delTaskAC(id));
};

export const markTask = (id, flag) => async (dispatch) => {
  const req = await fetch(`http://localhost:3003/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ flag }),
  });
  const res = await req.json();

  const { success } = res;
  
  if (success) dispatch(markTaskAC(id, flag));
};

