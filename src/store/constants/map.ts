import {createActionTypes} from "../utils";

const GetCurrentLocation = createActionTypes('GET_CURRENT_LOCATION');
const SetDestination = createActionTypes('SET_DESTINATION');
const SetDestinationDetails = createActionTypes('SET_DESTINATION_DETAILS');
const SetNetConnection = createActionTypes('SET_NET_CONNECTION');

export {
    GetCurrentLocation,
    SetDestination,
    SetDestinationDetails,
    SetNetConnection,
}
