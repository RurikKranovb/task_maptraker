import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask} from "../../store/actions/TaskAction";
import {ITaskModel} from "../../models/ITasks";
import {log} from "util";

interface TaskAddFormProps {
    title?:string;
    addTask: (task: Pick<ITaskModel, "title">) => void;
    tasks: ITaskModel[]
}
interface TaskAddFormState {
    title:string
}

class TaskAddForm extends Component<TaskAddFormProps, TaskAddFormState> {

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

    updateInput = (ev : React.ChangeEvent<HTMLInputElement>) => {
        // console.log(this, ev);
        this.setState({title: (ev.target as HTMLInputElement).value});
    };

    render() {
        console.log(this.props.tasks)

        // const {title} = ;

        return (
            <div>
                <div>
                    <input
                        onChange={this.updateInput}
                        value={this.state.title}
                    />
                    <button
                        className="add-todo"
                        onClick={this.handleAddTask}>
                        Add Task
                    </button>
                </div>

                {this.props.tasks.map(value => value.title)}

            </div>
        );
    };
};


const mapStateToProps = (AppDispatch: { tasks: []; }) => {

    return {
        tasks: AppDispatch.tasks
    }
};
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);
