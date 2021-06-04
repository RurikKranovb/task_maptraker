import React, {Component} from 'react';
import './App.scss';
import TaskAddForm from "./components/taskForm/TaskAddForm";

interface IApp {

}

class App extends Component<IApp> {

    render() {

        return (
            <div className="App">
                <div>
                    <h1>Header</h1>
                    <TaskAddForm/>
                </div>
            </div>
        );
    };
}

export default App;
