import {ADD_TASK, EDIT_TASK, REMOVE_TASK} from '../../constants/actionTypes'
import {ITaskModel} from "../../models/ITasks";

export const addTask = (task: Pick<ITaskModel, "title">) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (id: string) => ({ type: REMOVE_TASK, payload: id });
export const editTask = (id: string, task: Partial<ITaskModel>) => ({ type: EDIT_TASK, payload: {id, task} });
