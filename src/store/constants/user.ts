import {createActionTypes} from "../utils";

const GetProfile = createActionTypes('GET_PROFILE');
const GetCar = createActionTypes('GET_CAR');
const UpdateProfile = createActionTypes('UPDATE_PROFILE');

export {
    GetProfile,
    UpdateProfile,
    GetCar,
}
