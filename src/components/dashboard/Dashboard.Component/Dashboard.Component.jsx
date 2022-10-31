import React, { useEffect, useState } from 'react';

import './Dashboard.Component.css';

import Header from '../../common/Header.Component/Header.Component';
import TasksList from './components/TasksList.Component/TasksList.Component';
import Modal from '../../common/Modal.Component/Modal.Component';
import DashWidget from './components/DashWidget.Component/DashWidget.Component';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../utility/api';
import { taskListItem } from '../../../reducer/taskListData/taskList.action';
import { dashboardItem } from '../../../reducer/dashboardData/dashboard.action';
import { modalEnableAction, modalSetDataAction } from '../../../reducer/ModalActiob/modal.action';
const Dashboard = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();



    const getTasksList = async () => {
        const res = await apiRequest().get('/tasks');
        if (res?.data) {
            dispatch(taskListItem(res?.data));
            if (res?.data?.length <= 0 && !selector?.modal?.modalEnable) {
                enableModal();
            }
        }
    }

    const getDashboardData = async () => {
        const res = await apiRequest().get('/dashboard');
        if (res?.data) {
            dispatch(dashboardItem(res?.data));
            if (res?.data?.totalTasks == 0 && !selector?.modal?.modalEnable) {
                // setName();
                enableModal();
            }
        }
    }

    const enableModal = () => {
        dispatch(modalEnableAction(true));
        dispatch(modalSetDataAction({ getData }));
    }

    const getData = () => {
        getTasksList();
        getDashboardData();
    }

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 200);
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <div className='dash-cont'>
                <Header></Header>
                {(selector?.taskData?.taskList?.length > 0 || selector?.dashboardData?.dashboardData?.totalTasks > 0) ? <>
                    {/* Dashboard widget - begin*/}
                    <DashWidget />
                    {/* Dashboard widget - done */}

                    {/* Task action - begin */}
                    <div className='task-action'>
                        <input placeholder='search by task name' onInput={e => setSearchValue(e.target.value)} className='search-input' />
                        <button onClick={() => enableModal()} className='btn-add-task'>+ Add New Task</button>
                    </div>
                    {/* Task action - done */}

                    {/* Task list table - begin*/}
                    <TasksList getData={getData} searchValue={searchValue} setSearchValue={setSearchValue} />
                    {/* Task list table - done */}
                </> : <></>}
            </div>
            <Modal />
        </>
    )

}

export default Dashboard;