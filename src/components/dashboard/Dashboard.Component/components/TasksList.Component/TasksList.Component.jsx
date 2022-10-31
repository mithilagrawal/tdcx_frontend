import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { apiRequest } from '../../../../../utility/api';
import Modal from '../../../../common/Modal.Component/Modal.Component';

// import './TaskList.Component.css';

const TasksList = () => {
    const selector = useSelector(state => state?.taskData);



    return (
        <>
            <div className="task-list-table-head">
                <div className="task-list-table">
                    {/* No Data found section */}
                    <div className='no-data-found'>
                        <p>No data found</p>
                    </div>
                    {/* No Data found section - done */}
                </div>
            </div>
        </>
    )
}

export default TasksList;