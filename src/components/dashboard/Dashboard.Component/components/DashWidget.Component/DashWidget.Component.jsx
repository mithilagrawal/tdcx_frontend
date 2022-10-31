import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart } from "react-minimal-pie-chart"

import './DashWidget.Component.css';

const DashWidget = () => {
    const selector = useSelector(state => state);
    return (
        <div className="wid-head">
            <div className="wid-card wild-card-one">
                <div style={{ padding: '24px' }}>
                    <span className='wid-task-complete'>Task Completed</span>
                    <div className='wid-task-complete-count'>
                        <span className='wid-task-comp-count'>
                            {selector?.dashboardData?.dashboardData?.tasksCompleted || 0}
                        </span>
                        {' '}
                        {`/ ${selector?.dashboardData?.dashboardData?.totalTasks || 0}`}
                    </div>
                </div>
            </div>
            <div className="wid-card wild-card-two">
                <div style={{ padding: '24px' }}>
                    <span className='latest-task-created'>Latest Task Created</span>
                    <ul className='latest-task-created-list'>
                        {selector?.dashboardData?.dashboardData?.latestTasks?.map((item, idx) =>
                            item?.completed ? <>
                                <li key={idx} className='task-item-comp'>{item?.name}</li>
                            </> : <>
                                <li key={idx} className='task-item-n-comp'>{item?.name}</li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
            <div className="wid-card wild-card-three">
                <div style={{ padding: '24px' }}>
                    <PieChart
                        style={{ height: "100px" }}
                        data={[
                            {
                                title: "Completed",
                                value: selector?.dashboardData?.dashboardData?.tasksCompleted,
                                color: "#5285EC",
                            },
                            {
                                title: "Not Completed",
                                value: selector?.dashboardData?.dashboardData?.totalTasks - selector?.dashboardData?.dashboardData?.tasksCompleted,
                                color: "#E8ECEC",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default DashWidget;