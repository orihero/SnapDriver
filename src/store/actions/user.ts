import {createAction} from "../utils";
import * as User from "../constants/user";

const GetProfile = createAction(User.GetProfile.REQUEST);
const GetCar = createAction(User.GetCar.REQUEST);
const UpdateProfile = createAction(User.UpdateProfile.REQUEST);

export default {
    GetProfile,
    UpdateProfile,
    GetCar,
}
