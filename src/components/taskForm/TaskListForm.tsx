import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";
import TaskItemForm from "./TaskItemForm";


interface ITaskListFormProps {
    tasks: ITaskModel[]
}

class TaskListForm extends Component<ITaskListFormProps> {
    render() {
        return (
            <div>
                    {this.props.tasks.map(value => <li> <TaskItemForm title={value.title}/></li>)}
            </div>
        );
    };
};

export default TaskListForm;