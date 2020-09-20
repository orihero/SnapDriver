import {createActionTypes} from "../utils";

const GetProfile = createActionTypes('GET_PROFILE');
const GetCar = createActionTypes('GET_CAR');
const UpdateProfile = createActionTypes('UPDATE_PROFILE');
const UpdateLocation = createActionTypes('UPDATE_LOCATION');
const GetNotifications = createActionTypes('GET_NOTIFICATIONS');
const GetStatistics = createActionTypes('GET_STATISTICS');

export {
    GetProfile,
    UpdateProfile,
    GetCar,
    UpdateLocation,
    GetNotifications,
    GetStatistics,
}
