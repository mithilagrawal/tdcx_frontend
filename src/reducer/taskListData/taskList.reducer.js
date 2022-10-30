import { getTaskList } from "./taskList.Utility"
import taskListType from "./taskListType";


const INITIAL_STATE = {
    taskList: []
}

const taskListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case taskListType.ADD_TASK_LIST:
            return {
                ...state,
                taskList: getTaskList(state.taskList, action)
            }
        default: return state;
    }
}

export default taskListReducer;