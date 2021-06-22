import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";
import TaskListForm from "./TaskListForm";
import './style/index.scss';


interface TaskAddFormProps {
    title?:string;
    addTask: (task: Pick<ITaskModel, "title">) => void;
    tasks: ITaskModel[]
};

interface TaskAddFormState {
    title:string
};

class TaskForm extends Component<TaskAddFormProps, TaskAddFormState> {

    state = {
        title: this.props.title || ''
    };

    handleAddTask = (ev: React.MouseEvent) => {
        // console.log(this)
        this.props.addTask({
            title: this.state.title
        });
        this.setState({title: ""});
    };

    updateInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(this, ev);
        this.setState({title: (ev.target as HTMLInputElement).value});
    };

    render() {
        console.log(this.props.tasks)

        return (

            <div>
                <div>
                    <input
                        onChange={this.updateInput}
                        value={this.state.title}/>
                    <button
                        className="add-todo"
                        onClick={this.handleAddTask}>
                        Add Task
                    </button>
                </div>

                <TaskListForm tasks={this.props.tasks}/>

            </div>
        );
    };
};

export default TaskForm;
