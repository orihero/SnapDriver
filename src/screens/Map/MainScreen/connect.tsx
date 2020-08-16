import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import MainScreenController from "./controller";
import booking from "@store/actions/booking";

const mapStateToProps = ({booking: {driverStatus, newOrder}}: any) => ({
    driverStatus,
    newOrder,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SetDriverStatusOnline: booking.SetDriverStatusOnline,
        SetDriverStatusOffline: booking.SetDriverStatusOffline,
        NewOrder: booking.NewOrder,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
