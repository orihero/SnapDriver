import {createActionTypes} from "../utils";

const SetDriverStatusOnline = createActionTypes('SET_DRIVER_STATUS_ONLINE');
const SetDriverStatusOffline = createActionTypes('SET_DRIVER_STATUS_OFFLINE');
const NewOrder = createActionTypes('NEW_ORDER');
const SkipNewOrder = createActionTypes('SKIP_NEW_ORDER');

export {
    SetDriverStatusOnline,
    SetDriverStatusOffline,
    NewOrder,
    SkipNewOrder,
}
