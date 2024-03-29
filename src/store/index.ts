import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "./reducers";


const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch

export default store;