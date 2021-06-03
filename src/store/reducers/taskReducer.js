import {ADD_TASK, EDIT_TASK, REMOVE_TASK} from "../../constants/actionTypes";

const initialState = [
    { id: 1, title: 'Task # 1', completed: true },
    { id: 3, title: 'Task # 2', completed: false },
    { id: 2, title: 'Task # 3', completed: false },
];

const taskReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TASK:
            // console.log(action)
            return [
                ...state,
                {
                    id: state.reduce((maxId, task) =>
                        Math.max(task.id, maxId), -1) + 1,
                    completed: false,
                    title: action.payload.title
                }
            ];

        // case REMOVE_TASK:
        //     return state.filter((task) => task.id !== action.payload);
        //
        // case EDIT_TASK:
        //     return state.map(task =>
        //         task.id === action.id
        //             ? { ...task, text: action.text }
        //             : task
        //     );



        default:
            return state;
    };
}

export default taskReducer;