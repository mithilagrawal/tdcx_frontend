
import { combineReducers } from 'redux';
import dashboardReducer from './dashboardData/dashboard.reducer';
import taskListReducer from './taskListData/taskList.reducer';

export default combineReducers({
    dashboardData: dashboardReducer,
    taskData: taskListReducer
})