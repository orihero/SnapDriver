import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import auth from "@store/actions/auth";
import user from "@store/actions/user";
import EnterCodeScreenController from "./controller";
import {SendPush} from "@store/constants/booking";

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        VerifyCode: auth.VerifyCode,
        ResendCode: auth.ResendCode,
        GetProfile: user.GetProfile,
        GetCar: user.GetCar,
        SendPush: (payload: any) => ({
            type: SendPush.SUCCESS,
            payload
        })
    }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps
)(EnterCodeScreenController);
