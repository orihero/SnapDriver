import {GetCurrentLocation, SetDestination, SetDestinationDetails} from "../constants/map";

const initialState = {
    currentLocation: {
        latitude: 31.776685,
        longitude: 35.234491,
    },
    destination: {
        details: {}
    }
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  GetCurrentLocation.SUCCESS:
            return {
                ...state,
                currentLocation: action.payload
            };
        case SetDestination.SUCCESS:
            return {
                ...state,
                destination: action.payload
            };
        case SetDestinationDetails.SUCCESS:
            return {
                ...state,
                destination: {
                    details: action.payload
                }
            };
        default:
            return state
    }
}
