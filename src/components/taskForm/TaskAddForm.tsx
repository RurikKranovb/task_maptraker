import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask} from "../../store/actions/TaskAction";
import {ITaskModel} from "../../models/ITasks";

interface TaskAddFormProps {
    title?:string;
    addTask: (task: Pick<ITaskModel, "title">) => void
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

            </div>
        );
    };
};

const mapStateToProps = () => {
    return {
    }
};
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);

//export default TaskAddForm;