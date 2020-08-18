import {
    AcceptNewOrder, ChangeOrderStatus,
    NewOrder,
    SetDriverStatusOffline,
    SetDriverStatusOnline, SetWaiting,
    SkipNewOrder
} from "../constants/booking";

const initialState = {
    driverStatus: false,
    newOrder: {
        isModalVisible: false,
        data: {},
    },
    waiting: {
        time: 0,
        status: false,
    },
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
                    data: action.payload,
                }
            }
        }
        case SkipNewOrder.REQUEST: {
            return {
                ...state,
                newOrder: {
                    isModalVisible: false,
                    data: {},
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
        case SetWaiting.SUCCESS: {
            return {
                ...state,
                waiting: action.payload,
            }
        }
        default:
            return state
    }
}
