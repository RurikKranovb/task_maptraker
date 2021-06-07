import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";
import TaskItemContainer from "./container/TaskItemContainer";



interface ITaskListFormProps {
    tasks: ITaskModel[]
};

class TaskListForm extends Component<ITaskListFormProps> {
    render() {
        return (
            <div>
                    {this.props.tasks.map(value => <li key={value.id}> <TaskItemContainer task={value}/> </li>)}
            </div>
        );
    };
};

export default TaskListForm;