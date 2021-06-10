import {combineReducers} from "redux";
import taskReducer from "./taskReducer";
import {ITaskModel} from "../../models/ITasks";

export interface StoreState {
   todos: ITaskModel[]
};


export const rootReducers = combineReducers/*<StoreState>*/({
   tasks: taskReducer
});

export type RootState = ReturnType<typeof rootReducers>;