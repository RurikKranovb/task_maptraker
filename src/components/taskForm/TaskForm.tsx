import React, {Component, useState} from 'react';
import {ITaskModel} from "../../models/ITasks";
import TaskListForm from "./TaskListForm";
import './style/index.scss';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


interface TaskAddFormProps {
    title?:string;
    addTask: (task: Pick<ITaskModel, "title">) => void;
    tasks: ITaskModel[]
};

interface TaskAddFormState {
    title:string
    setIsModalVisible: boolean
    isModalVisible: boolean
};

class TaskForm extends Component<TaskAddFormProps, TaskAddFormState> {

    state = {
        title: this.props.title || '',
        setIsModalVisible: false,
        isModalVisible: false
    };

    handleAddTask = (ev: React.MouseEvent) => {
        // console.log(this)
        this.props.addTask({
            title: this.state.title
        });
        this.setState({title: ""});
    };

    updateInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(this, ev);
        this.setState({title: (ev.target as HTMLInputElement).value});
    };

    render() {
        console.log(this.props.tasks)

        const showModal = () => {
            // console.log(this.state.isModalVisible)

           this.setState({
               isModalVisible: true
           });
        };

        const handleOk = () => {

            this.props.addTask({
                title: this.state.title
            });

            this.setState({
                isModalVisible: false,
                title: ""
            });
        };

        const handleCancel = () => {

            this.setState({
                isModalVisible: false
            });
        };

        return (

            <div>
                <Button type="primary" onClick={showModal}>
                    Add Task
                </Button>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <div>
                        <h1>Задача:</h1>
                        <input title='Задача:'
                            onChange={this.updateInput}
                            value={this.state.title}/>
                        {/*<button*/}
                        {/*    className="add-todo"*/}
                        {/*    onClick={this.handleAddTask}>*/}
                        {/*    Add Task*/}
                        {/*</button>*/}
                    </div>
                </Modal>

                <TaskListForm tasks={this.props.tasks}/>

            </div>
        );
    };
};

export default TaskForm;
