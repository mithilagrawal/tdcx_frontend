import taskListType from "./taskListType"

export const taskListItem = item => {
    return ({
        type: taskListType.ADD_TASK_LIST,
        payload: item
    })
}