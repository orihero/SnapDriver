import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import MainScreenController from "./controller";
import booking from "@store/actions/booking";
import map from "@store/actions/map";
import user from "@store/actions/user";

const mapStateToProps = ({booking: {driver, newOrder}, map: {isNetConnected}, user: {car}}: any) => ({
    driver,
    newOrder,
    isNetConnected,
    car,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SetDriverStatusOnline: booking.SetDriverStatusOnline,
        SetDriverStatusOffline: booking.SetDriverStatusOffline,
        NewOrder: booking.NewOrder,
        UpdateLocation: user.UpdateLocation,
        SetNetConnection: map.SetNetConnection,
        GetProfile: user.GetProfile
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
