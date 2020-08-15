import {
    AcceptNewOrder,
    NewOrder,
    SetDriverStatusOffline,
    SetDriverStatusOnline,
    SkipNewOrder
} from "../constants/booking";

const initialState = {
    driverStatus: false,
    newOrderModal: {
        visible: false,
        data: null
    }
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
                newOrderModal: {
                    visible: true,
                    data: action.payload
                }
            }
        }
        case SkipNewOrder.REQUEST: {
            return {
                ...state,
                newOrderModal: {
                    visible: false,
                    data: null
                }
            }
        }
        case AcceptNewOrder.SUCCESS: {
            return {
                ...state,
                newOrderModal: {
                    visible: false,
                    data: null
                }
            }
        }
        default:
            return state
    }
}
