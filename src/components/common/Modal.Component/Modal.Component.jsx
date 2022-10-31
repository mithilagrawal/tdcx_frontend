import React from 'react';

import './Modal.Component.css';

const Modal = (props) => {
    return (
        <>
            {props?.view && <div className="presentation">
                <div className="modal">
                    <div className="modal-container">
                        <div className="modal-body">
                            {props?.children}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal;