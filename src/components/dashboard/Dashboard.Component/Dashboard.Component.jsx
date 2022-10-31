import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import './Dashboard.Component.css';

import Header from '../../common/Header.Component/Header.Component';
import TasksList from './components/TasksList.Component/TasksList.Component';
import Modal from '../../common/Modal.Component/Modal.Component';
import DashWidget from './components/DashWidget.Component/DashWidget.Component';
import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../utility/api';
import { taskListItem } from '../../../reducer/taskListData/taskList.action';
import { dashboardItem } from '../../../reducer/dashboardData/dashboard.action';
const Dashboard = () => {

    const [viewModal, setViewModal] = useState(false);

    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const [name, setName] = useState();

    const newTaskSubmit = async () => {
        apiRequest.post('/tasks', { name })
            .then(res => {
                if (res?.status == 200) {
                    getTasksList();
                }
                setViewModal(false);
                setName();

            })
            .catch(err => {
                toast.error("Something went wrong");
            })
    }

    const getTasksList = async () => {
        const res = await apiRequest.get('/tasks');
        if (res?.data) {
            console.log("res data task", res?.data?.length)
            dispatch(taskListItem(res?.data));
            if (res?.data?.length <= 0 && !viewModal) {
                setName();
                setViewModal(true);
            }
        }
    }

    const getDashboardData = async () => {
        const res = await apiRequest.get('/dashboard');
        if (res?.data) {
            console.log("res data dashboard", res?.data)
            dispatch(dashboardItem(res?.data));
            if (res?.data?.totalTasks == 0 && !viewModal) {
                setName();
                setViewModal(true);
            }
        }
    }

    const getData = () => {
        getTasksList();
        getDashboardData();
    }

    useEffect(() => {
        getData();
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
                        <input placeholder='search by task name' className='search-input' />
                        <button onClick={() => setViewModal(true)} className='btn-add-task'>+ Add New Task</button>
                    </div>
                    {/* Task action - done */}

                    {/* Task list table - begin*/}
                    <TasksList />
                    {/* Task list table - done */}
                </> : <></>}
            </div>
            <Modal view={viewModal}>
                <p>+ New Task</p>
                <input placeholder='Task Name' value={name} onInput={e => setName(e.target.value)} className="search-input" style={{ marginTop: "32px", width: '276px' }} />
                <button onClick={() => newTaskSubmit()} className='btn-add-task' style={{ marginLeft: "0px", marginRight: '0px', width: '100%' }}>+ New Task</button>
            </Modal>

        </>
    )

}

export default Dashboard;