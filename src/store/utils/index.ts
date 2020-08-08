export const createActionTypes = (actionType: string) => ({
    REQUEST: `${actionType}_REQUEST`,
    SUCCESS: `${actionType}_SUCCESS`,
    FAILURE: `${actionType}_FAILURE`,
});

export const createAction = (actionType: string) => (
    values: any,
    cb = (data: any) => {
    },
    errorCb = (error: any) => {
    }
) => ({type: actionType, payload: values, cb, errorCb});

export let constructFileFromUri = (file: any) => {
    let {uri, type, fileName} = file;
    return {uri, name: fileName, type};
};

export let formData = (rawData: any) => {
    let form = new FormData();
    Object.keys(rawData).forEach(key => {
        form.append(key, rawData[key]);
    });
    return form;
};
