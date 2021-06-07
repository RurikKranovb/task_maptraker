import React, {Component} from 'react';
import './App.scss';
import {connect} from "react-redux";
import TaskFormContainer from "./components/taskForm/container/TaskFormContainer";

interface IApp {
    //tasks: ITaskModel[];
    //addEvent: (task: ITaskModel) => void;
}


class App extends Component<IApp> {

    render() {

        return (
            <div className="App">
                <div>
                    <h1>Список задач</h1>
                    <TaskFormContainer/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state : any) => {
    return {
        // tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // addEvent: (task: ITaskModel) => dispatch(addTask(task)),
    };
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default ConnectedApp;
