import {combineReducers} from "redux";
import taskReducer from "./taskReducer";



export const rootReducers = combineReducers({
   tasks: taskReducer
});

export type RootState = ReturnType<typeof rootReducers>;