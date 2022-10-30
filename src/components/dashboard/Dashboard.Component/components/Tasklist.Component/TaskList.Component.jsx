import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { taskListItem } from '../../../../../reducer/taskListData/taskList.action';
import { apiRequest } from '../../../../../utility/api';

// import './TaskList.Component.css';

const TaskList = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state?.taskData);

    useEffect(() => {
        return async () => {
            const res = await apiRequest.get('/tasks');
            console.log(res?.data)
            if (res?.data) {
                dispatch(taskListItem(res?.data));
            }
        }
        // eslint-disable-next-line
    }, []);


    return (
        <div className="card-body">
            <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4">
                <div className="row">
                    <div className='col-md-12'>
                        <div className="x_panel">
                            <div className="x_content">
                                <div className="table-responsive">
                                    <table className="table table-striped jambo_table bulk_action">
                                        <tbody>
                                            {
                                                selector?.taskList?.map((item, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>
                                                                <input type="checkbox" className="flat" name="table_records" />
                                                            </td>
                                                            <td>{item?.name}</td>
                                                            <td className=" ">May 23, 2014 11:47:56 PM </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default TaskList;