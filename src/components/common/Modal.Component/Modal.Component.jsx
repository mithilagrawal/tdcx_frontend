import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import { apiRequest } from '../../../utility/api';

import './Modal.Component.css';
import { modalEnableAction, modalSetDataAction } from '../../../reducer/ModalActiob/modal.action';

const Modal = () => {
    const selector = useSelector(state => state?.modal);
    const [name, setName] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selector?.modalData?.name) {
            setName(selector?.modalData?.name);
        }
    }, [selector])

    const submitAct = () => {

        dispatch(modalEnableAction(false));
        dispatch(modalSetDataAction({}));
    }

    const newTaskSubmit = async () => {
        const modalData = selector?.modalData;
        const submitTask = {
            edit: { api: `/tasks/${modalData?.id}`, method: 'put', data: { name } },
            new: { api: `/tasks`, method: 'post', data: { name } }
        }

        apiRequest()[submitTask[modalData?.mode].method](submitTask[modalData?.mode].api, submitTask[modalData?.mode].data)
            .then(res => {
                console.log({ res })
                setName();

                if (res?.status == 200) {
                    selector?.modalData?.getData();
                }
                submitAct();
            })
            .catch(err => {
                console.log({ err });
                toast.error("Something went wrong");
                submitAct();
            })
    }

    return (
        <>
            {selector?.modalEnable && <div className="presentation">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-body">
                            <p>{selector?.modalData?.mode == 'edit' ? 'Edit Task' : '+ New Task'}</p>
                            <input placeholder='Task Name' value={name} onInput={e => setName(e.target.value)} className="search-input" style={{ marginTop: "32px", width: '276px' }} />
                            <button onClick={() => newTaskSubmit()} className='btn-add-task' style={{ marginLeft: "0px", marginRight: '0px', width: '100%' }}>
                                {selector?.modalData?.mode == 'edit' ? 'Edit Task' : '+ New Task'}</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal;