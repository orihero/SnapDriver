import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import TripEndInfoPanelPanelController from "./controller";
import booking from "@store/actions/booking";

const mapStateToProps = ({booking: {newOrder}}: any) => ({
    newOrder: newOrder.data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SkipNewOrder: booking.SkipNewOrder,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripEndInfoPanelPanelController);
