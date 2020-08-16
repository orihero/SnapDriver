import {
    AcceptNewOrder, ChangeOrderStatus,
    NewOrder,
    SetDriverStatusOffline,
    SetDriverStatusOnline,
    SkipNewOrder
} from "../constants/booking";

const initialState = {
    driverStatus: false,
    newOrder: {
        isModalVisible: false,
        data: {}
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
                newOrder: {
                    isModalVisible: true,
                    data: action.payload
                }
            }
        }
        case SkipNewOrder.REQUEST: {
            return {
                ...state,
                newOrder: {
                    isModalVisible: false,
                    data: {}
                }
            }
        }
        case AcceptNewOrder.SUCCESS: {
            return {
                ...state,
                newOrder: {
                    data: action.payload,
                    isModalVisible: false,
                }
            }
        }
        case ChangeOrderStatus.SUCCESS: {
            return {
                ...state,
                newOrder: {
                    data: action.payload,
                    isModalVisible: false,
                }
            }
        }
        default:
            return state
    }
}
