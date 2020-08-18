import {VerifyCode} from "../constants/auth";
import {GetCar, GetProfile, UpdateProfile} from "../constants/user";

const initialState = {
    token: null,
    isAuthenticated: false,
    data: [],
    isRegistered: false,
    car: {}
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case  VerifyCode.SUCCESS:
            const {token} = action.payload;
            return {
                ...state,
                token: token,
                isAuthenticated: false,
                data: []
            };
        case  GetProfile.SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                data: action.payload
            };
        case  UpdateProfile.SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case  GetCar.SUCCESS:
            return {
                ...state,
                car: {
                    ...state.car,
                    ...action.payload,
                }
            };
        default:
            return state
    }
}
