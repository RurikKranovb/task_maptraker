import React, {Component} from 'react';
import TaskAdd from "./components/taskForm/TaskAddForm";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>

                <TaskAdd></TaskAdd>
            </div>
        );
    }
}

export default App;