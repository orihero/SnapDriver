import {createAction} from "../utils";
import * as User from "../constants/user";

const GetProfile = createAction(User.GetProfile.REQUEST);
const GetCar = createAction(User.GetCar.REQUEST);
const UpdateProfile = createAction(User.UpdateProfile.REQUEST);
const UpdateLocation = createAction(User.UpdateLocation.REQUEST);
const GetNotifications = createAction(User.GetNotifications.REQUEST);
const GetStatistics = createAction(User.GetStatistics.REQUEST);

export default {
    GetProfile,
    UpdateProfile,
    GetCar,
    UpdateLocation,
    GetNotifications,
    GetStatistics,
}
