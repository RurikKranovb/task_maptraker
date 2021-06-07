import { editTask, deleteTask} from "../../../store/actions/TaskAction";
import {connect} from "react-redux";
import TaskItemForm from "../TaskItemForm";

export const mapStateToProps = (state: any) => {
    return {
    };
};

export const mapDispatchToProps = {
    editTask, deleteTask
};

const TaskItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskItemForm);

export default TaskItemContainer;