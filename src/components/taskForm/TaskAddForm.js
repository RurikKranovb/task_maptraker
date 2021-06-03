import React, {Component} from 'react';
import {connect} from "react-redux";
import {addTask} from "../../store/actions/TaskAction";


class TaskAddForm extends Component {

    state = {
        title: this.props.title || ''
    };

    handleAddTask = (ev) => {
        // console.log(this)
        this.props.addTask({
            title: this.state.title
        });
        this.setState({title: ""});
    };

    updateInput = ev => {
        // console.log(this, ev);
        this.setState({title: ev.target.value});
    };

    render() {
       const body = this.props.mySuperPuperState

        console.log(body)
        return (
            <div>
                <div>
                    <input
                        onChange={this.updateInput}
                        value={this.state.title}
                    />
                    <button
                        type="primary"
                        className="add-todo"
                        onClick={this.handleAddTask}>
                        Add Task
                    </button>
                </div>

            </div>
        );
    };
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        mySuperPuperState: state
    }
};
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskAddForm);

//export default TaskAddForm;