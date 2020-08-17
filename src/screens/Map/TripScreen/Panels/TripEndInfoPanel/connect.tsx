import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import TripEndInfoPanelPanelController from "./controller";
import booking from "@store/actions/booking";
import {SkipNewOrder} from "@store/constants/booking";

const mapStateToProps = ({booking: {newOrder}}: any) => ({
    newOrder
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ChangeOrderStatus: booking.ChangeOrderStatus,
        SkipNewOrder: booking.SkipNewOrder,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripEndInfoPanelPanelController);
