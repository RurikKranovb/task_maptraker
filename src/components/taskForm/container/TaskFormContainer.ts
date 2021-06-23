import {addTask} from "../../../store/actions/TaskAction";
import {connect} from "react-redux";
import TaskForm from "../TaskForm";


export const mapStateToProps = (AppDispatch: any) => {
    return {
        tasks: AppDispatch.tasks
    };
};

export const mapDispatchToProps = {
    addTask
};

const TaskFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskForm);

export default TaskFormContainer;
