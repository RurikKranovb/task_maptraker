import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";
import TaskItemContainer from "./container/TaskItemContainer";
import './style/index.scss'


interface ITaskListFormProps {
    tasks: ITaskModel[]
};

class TaskListForm extends Component<ITaskListFormProps> {
    render() {
        return (
            <div className='taskListForm__taskItems'>
                    {this.props.tasks.map(value =>
                        <li className='taskListForm__taskItem' key={value.id}>
                            <TaskItemContainer task={value}/>
                        </li>)}
            </div>
        );
    };
};

export default TaskListForm;
