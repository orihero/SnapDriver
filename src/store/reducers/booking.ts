import {NewOrder, SetDriverStatusOffline, SetDriverStatusOnline, SkipNewOrder} from "../constants/booking";

const initialState = {
    driverStatus: false,
    newOrderModal: false,
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  SetDriverStatusOnline.SUCCESS:
            return {
                ...state,
                driverStatus: true
            };
        case  SetDriverStatusOffline.SUCCESS:
            return {
                ...state,
                driverStatus: false
            };
        case NewOrder.SUCCESS: {
            return {
                ...state,
                newOrderModal: true,
            }
        }
        case SkipNewOrder.SUCCESS: {
            return {
                ...state,
                newOrderModal: false,
            }
        }
        default:
            return state
    }
}
