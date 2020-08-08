interface IAction {
    (values?: any, successCallback?: (data ?: any) => any, errorCallback?: (errors ?: any) => any): { type: string, payload: any }
}

export default IAction;
