import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";

interface ITaskItemFormProps {
    task: ITaskModel
}
interface ITaskItemFormActions {
    deleteTask: (id: string) => void;
}

interface ITaskItemFormState {
    isEditing: boolean
}

type TaskItemFormPropsAll = ITaskItemFormProps & ITaskItemFormActions

class TaskItemForm extends Component<TaskItemFormPropsAll, ITaskItemFormState> {
    constructor(props: TaskItemFormPropsAll) {
        super(props);

        this.remove = this.remove.bind(this)
        this.startEditing = this.startEditing.bind(this)
        // this.edit = this.edit.bind(this)

        this.state = {
            isEditing: false
        }
    };

    render() {
        console.log(this.props);
        const isTrue = true;


        return (
            <div>
                { isTrue  && (<div>test</div>)}

                <div onClick={this.startEditing}>
                    {this.conditionRender(this.state.isEditing)}

                </div>

                <button className='removeButton' onClick={this.remove}>Remove</button>
            </div>
        );
    };

    private conditionRender(val:boolean) {

        if(val) {
            return  <div> <input title={this.props.task.title}/> </div>;
        }
        return <div> {this.props.task.title} </div>;
    }
    private startEditing() {

        this.setState({
            isEditing: true
        })
    }


    // private edit() {
    //
    // }

    private remove() {

        this.props.deleteTask(
            this.props.task.id
        );
    };
};



export default TaskItemForm;