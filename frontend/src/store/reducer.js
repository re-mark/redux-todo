import * as actionTypes from './types.js';
const { actionTypes: { ADD_TASK, DEL_TASK, GET_TASKS, MARK_TASK } } = actionTypes;

const initState = {
  tasks: [ ],
};

function markTask(arr, id, flag) {
  const taskToMarkIndex = arr.findIndex((el) => el._id === id);
  const task = arr[taskToMarkIndex];
  
  const updatedTask = {
    ...task,
    [flag]: !task[flag],
  };

  return [
    ...arr.slice(0, taskToMarkIndex),
    updatedTask,
    ...arr.slice(taskToMarkIndex + 1),
  ];
}

const reducer = (currentState = initState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...currentState,
        tasks: action.tasks,
      };
    case ADD_TASK:
      const newTask = {
        value: action.value,
        isDone: false,
        isImportant: false,
        isVisible: true,
        _id: action.id,
      };
  
      return {
        ...currentState,
        tasks: [
          ...currentState.tasks,
          newTask,
        ],
      };
    case DEL_TASK:
      const taskToDelIdx = currentState.tasks.findIndex((el) => el._id === action.id);

      return {
        ...currentState,
        tasks: [
          ...currentState.tasks.slice(0, taskToDelIdx),
          ...currentState.tasks.slice(taskToDelIdx + 1)
        ]
      };
    case MARK_TASK: {
      const updatedTasks = markTask(currentState.tasks, action.id, action.flag);

      return {
        ...currentState,
        tasks: updatedTasks,
      };
    }
    default:
      return currentState;
  }
};

export default reducer;
