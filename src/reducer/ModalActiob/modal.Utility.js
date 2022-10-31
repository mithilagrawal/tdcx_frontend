export const modalActionUtil = (data, action) => {
    return action?.payload
}

export const modalSetDataUtil = (data = {}, action) => {
    const payloadData = action?.payload;
    const setData = {
        mode: 'new'
    };
    if ('getData' in payloadData) {
        setData['getData'] = payloadData.getData
    }

    if ('id' in payloadData) {
        setData['id'] = payloadData.id;
    }

    if ('name' in payloadData) {
        setData['name'] = payloadData.name;
    }

    if ('mode' in payloadData) {
        setData['mode'] = payloadData.mode;
    }

    return setData;
}