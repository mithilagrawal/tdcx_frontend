import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PencilIcon from '../../../../../static/icons/pencil';
import TrashIcon from '../../../../../static/icons/trash';
import { apiRequest } from '../../../../../utility/api';
import { toast } from 'react-toastify';

import './TasksList.Component.css';
import { modalEnableAction, modalSetDataAction } from '../../../../../reducer/ModalActiob/modal.action';

const TasksList = (props) => {
    // get the task data from the redux store
    const selector = useSelector(state => state?.taskData);
    const dispatch = useDispatch();
    const [taskList, setTaskList] = useState([]);
    const taskListFunc = () => {
        if (selector?.taskList?.length > 0) {
            setTaskList(selector?.taskList);
        }
    }

    useEffect(() => {
        taskListFunc();
        // eslint-disable-next-line
    }, [selector]);


    //this use effect is use for search the task
    useEffect(() => {
        if (props?.searchValue) {
            const serVal = selector?.taskList?.filter(item => (item?.name.toString().toLowerCase()?.indexOf(props?.searchValue.toString().toLowerCase()) > -1));
            if (serVal?.length > 0) {
                setTaskList(serVal);
            } else {
                setTaskList([]);
            }
        } else {
            taskListFunc();
        }
        // eslint-disable-next-line
    }, [props])


    //for edit and delete the task
    const taskAction = (e, id, type) => {
        e.preventDefault();

        const actionType = {
            complete: { method: 'put', data: { completed: e.target.checked } },
            delete: { method: 'delete', data: {} }
        }

        apiRequest()[actionType[type].method](`/tasks/${id}`, actionType[type].data).then(res => {
            if (res?.status === 200) {
                props?.getData();
            }
        }).catch(
            err => {
                toast.error(err?.response?.data?.msg || 'Something went wrong')
            }
        )

    }


    //for edit the task
    const taskEditDeleteAction = (e, id, name, mode) => {
        e.preventDefault();

        dispatch(modalEnableAction(true));
        dispatch(modalSetDataAction({
            id,
            name,
            getData: props?.getData,
            mode
        }));
    }



    return (
        <>
            <div className="task-list-table-head">
                <div className="task-list-table">
                    {
                        taskList?.length > 0 ?
                            <>
                                {taskList?.map((item, idx) =>
                                    <div className={`task-list-table-content ${idx + 1 < taskList?.length ? 'border-bottom' : ''}`} key={idx}>
                                        <>
                                            <input type='checkbox' onChange={e => taskAction(e, item.id, 'complete')} className='task-item-completed-checkbox' checked={item?.completed} />
                                        </>
                                        <>
                                            {
                                                item?.completed ? <>
                                                    <p className='task-completed'>{item?.name}</p>
                                                </> : <>
                                                    <p className='task-pending'>{item?.name}</p>
                                                </>
                                            }
                                        </>
                                        <div className='task-action-edi-del'>
                                            <div style={{ 'cursor': 'pointer' }} onClick={e => taskEditDeleteAction(e, item?.id, item?.name, 'edit')}> <PencilIcon width={30} height={30} /></div>
                                            <div style={{ 'cursor': 'pointer' }} onClick={e => taskEditDeleteAction(e, item?.id, item?.name, 'delete')}> <TrashIcon width={30} height={30} /></div>
                                        </div>
                                    </div>
                                )}
                            </>
                            :
                            <div className='no-data-found'>
                                <p>No data found</p>
                            </div>
                    }
                </div>
            </div>

        </>
    )
}

export default TasksList;