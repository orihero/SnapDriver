import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import TripScreenController from "./controller";
import booking from "@store/actions/booking";

const mapStateToProps = ({booking: {newOrder}, map: {destination}}: any) => ({
    newOrder,
    destination: destination.details
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SetWaiting: booking.SetWaiting,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripScreenController);
