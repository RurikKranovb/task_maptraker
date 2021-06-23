import React, {Component} from 'react';
import {ITaskModel} from "../../models/ITasks";
import {editTask} from "../../store/actions/TaskAction";
import 'antd/dist/antd.css';
import { Button, Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



interface ITaskItemFormProps {
    task: ITaskModel
}
interface ITaskItemFormActions {
    deleteTask: (id: string) => void;
    editTask: (id: string, task: Partial<ITaskModel>) => void;
}

interface ITaskItemFormState {
    isEditing: boolean;
    titleValue: string;
}

type TaskItemFormPropsAll = ITaskItemFormProps & ITaskItemFormActions

class TaskItemForm extends Component<TaskItemFormPropsAll, ITaskItemFormState> {
    constructor(props: TaskItemFormPropsAll) {
        super(props);

        this.remove = this.remove.bind(this)
        this.toggleEditing = this.toggleEditing.bind(this)
        this.edit = this.edit.bind(this)

        this.state = {
            isEditing: false,
            titleValue: this.props.task.title
        };

        this.onWindowClick = this.onWindowClick.bind(this);
    };

    private onWindowClick(e: any){
        if(this.state.isEditing && e.target.className.indexOf("edit-title__input") === -1) {
            this.toggleEditing(new Event("close"));
        };
    };

    componentDidMount() {
        window.addEventListener("click", this.onWindowClick);
    };
    componentWillUnmount() {
        window.removeEventListener("click", this.onWindowClick);
    };

    render() {
        return (
            <div>
                <Space>
                    {this.conditionEditingRender(this.state.isEditing)}
                    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">

                        <Button>Remove</Button>

                        {/*<Button className='removeButton' onClick={this.remove}>Remove</Button>*/}

                    </Popconfirm>
                </Space>

            </div>
        );
    };

    private conditionEditingRender(val:boolean) {
        const id = this.props.task.id;

        if (val) {
            return (
                <div>
                    <input className="edit-title__input"
                           title={this.props.task.title}
                           value={this.state.titleValue}
                           onChange={this.edit(id)}/>
                </div>
            );
        };
        return (
            <div onClick={this.toggleEditing}>
                {this.props.task.title}
            </div>
        );
    };

    private toggleEditing(e: any) {
        e.stopPropagation();
        this.setState({
            isEditing: !this.state.isEditing
        });
        return false;
    };


    private edit(id : string) {
        return (e: any) => {

            this.setState({
                titleValue: e.target.value
            });

            const task = this.props.task;
            task.title = e.target.value;
            this.props.editTask(id, task);
        };
    };

    private remove() {
        this.props.deleteTask(
            this.props.task.id
        );
    };
};



export default TaskItemForm;
