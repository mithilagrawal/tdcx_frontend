
import { combineReducers } from 'redux';
import dashboardReducer from './dashboardData/dashboard.reducer';
import modalReducer from './ModalActiob/modal.reducer';
import taskListReducer from './taskListData/taskList.reducer';

export default combineReducers({
    dashboardData: dashboardReducer,
    taskData: taskListReducer,
    modal:modalReducer
})