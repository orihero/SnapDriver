import {combineReducers} from "redux";
import user from "./user";
import map from "./map";
import booking from "./booking";


const appReducer = combineReducers({
    user,
    map,
    booking
});

const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = {}
    }

    return appReducer(state, action)
};


export default rootReducer;
