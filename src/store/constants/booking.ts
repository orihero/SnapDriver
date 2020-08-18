import {createActionTypes} from "../utils";

const SetDriverStatusOnline = createActionTypes('SET_DRIVER_STATUS_ONLINE');
const SetDriverStatusOffline = createActionTypes('SET_DRIVER_STATUS_OFFLINE');
const NewOrder = createActionTypes('NEW_ORDER');
const SkipNewOrder = createActionTypes('SKIP_NEW_ORDER');
const AcceptNewOrder = createActionTypes('ACCEPT_NEW_ORDER');
const CancelOrder = createActionTypes('CANCEL_ORDER');
const ChangeOrderStatus = createActionTypes('CHANGE_ORDER_STATUS');
const SetWaiting = createActionTypes('SET_WAITING');


export {
    SetDriverStatusOnline,
    SetDriverStatusOffline,
    NewOrder,
    SkipNewOrder,
    AcceptNewOrder,
    ChangeOrderStatus,
    CancelOrder,
    SetWaiting,
}
