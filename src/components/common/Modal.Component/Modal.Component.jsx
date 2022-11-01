import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../utility/api';

import './Modal.Component.css';
import { modalEnableAction, modalSetDataAction } from '../../../reducer/ModalActiob/modal.action';

const Modal = () => {

    //fetch the modal data from the redux store
    const selector = useSelector(state => state?.modal);

    //create the name form for edit and create new task
    const [name, setName] = useState();

    const dispatch = useDispatch();

    /* 
        whenever any request raise for modal then check the modify name is avail into the modal redux
    */
    useEffect(() => {
        if (selector?.modalData?.name) {
            setName(selector?.modalData?.name);
        }
    }, [selector])

    //close the modal and create the data from the redux state
    const submitAct = () => {
        //disable the modal in redux store
        dispatch(modalEnableAction(false));
        //create the data from the redux store
        dispatch(modalSetDataAction({}));
    }

    
    const taskReqSubmit = async () => {
        const modalData = selector?.modalData;
        const submitTask = {
            edit: { api: `/tasks/${modalData?.id}`, method: 'put', data: { name } },
            new: { api: `/tasks`, method: 'post', data: { name } }
        }

        apiRequest()[submitTask[modalData?.mode].method](submitTask[modalData?.mode].api, submitTask[modalData?.mode].data)
            .then(res => {
                console.log({ res })
                setName();

                if (res?.status === 200) {
                    selector?.modalData?.getData();
                }
                submitAct();
            })
            .catch(err => {
                toast.error(err?.response?.data?.msg || 'Something went wrong')
                submitAct();
            })
    }

    return (
        <>
            {selector?.modalEnable && <div className="presentation">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-body">
                            <p>{selector?.modalData?.mode === 'edit' ? 'Edit Task' : '+ New Task'}</p>
                            <input placeholder='Task Name' value={name || ''} onInput={e => setName(e.target.value)} className="search-input" style={{ marginTop: "32px", width: '276px' }} />
                            <button onClick={() => taskReqSubmit()} className='btn-add-task btn-large' style={{ marginLeft: "0px", marginRight: '0px', width: '100%' }}>
                                {selector?.modalData?.mode === 'edit' ? 'Edit Task' : '+ New Task'}</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal;