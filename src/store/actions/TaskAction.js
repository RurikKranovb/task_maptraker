import {ADD_TASK, EDIT_TASK, REMOVE_TASK} from '../../constants/actionTypes'

export const addTask = newTask => ({ type: ADD_TASK, payload: newTask });
export const deleteTask = taskId => ({ type: REMOVE_TASK, payload: taskId });
export const editTask = task => ({ type: EDIT_TASK, payload: task });
