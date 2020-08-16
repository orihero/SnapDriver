import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import DestinationDetailsPanelController from "./controller";
import booking from "@store/actions/booking";

const mapStateToProps = ({booking: {newOrder}}: any) => ({
    newOrder
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ChangeOrderStatus: booking.ChangeOrderStatus
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DestinationDetailsPanelController);
