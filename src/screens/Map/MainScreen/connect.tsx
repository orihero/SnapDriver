import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import MainScreenController from "./controller";
import booking from "@store/actions/booking";
import user from "@store/actions/user";
import map from "@store/actions/map";

const mapStateToProps = ({booking: {driverStatus, newOrder}, map: {isNetConnected}}: any) => ({
    driverStatus,
    newOrder,
    isNetConnected,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SetDriverStatusOnline: booking.SetDriverStatusOnline,
        SetDriverStatusOffline: booking.SetDriverStatusOffline,
        NewOrder: booking.NewOrder,
        GetCar: user.GetCar,
        SetNetConnection: map.SetNetConnection,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
