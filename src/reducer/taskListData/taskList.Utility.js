export const getTaskList = (taskList, action) => {
    console.log({ taskList, action })
    return action?.payload
}