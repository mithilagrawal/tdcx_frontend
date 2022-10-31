import modalType from "./modal.type"

export const modalEnableAction = item => {
    return ({
        type: modalType.MODAL_ENABLE,
        payload: item
    })
}

export const modalSetDataAction = item => {
    return ({
        type: modalType.MODAL_SET_DATA,
        payload: item
    })
}