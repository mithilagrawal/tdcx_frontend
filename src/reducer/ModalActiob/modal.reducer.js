import { modalActionUtil, modalSetDataUtil } from "./modal.Utility"
import modalType from "./modal.type";


const INITIAL_STATE = {
    modalEnable: false,
    modalData: {}
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case modalType.MODAL_ENABLE:
            return {
                ...state,
                modalEnable: modalActionUtil(state.modalEnable, action)
            }
        case modalType.MODAL_SET_DATA:
            return {
                ...state,
                modalData: modalSetDataUtil(state.modalData, action)
            }
        default: return state;
    }
}

export default modalReducer;