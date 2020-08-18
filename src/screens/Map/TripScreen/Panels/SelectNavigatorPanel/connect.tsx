import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import SelectNavigatorPanelController from "./controller";
import booking from "@store/actions/booking";

const mapStateToProps = ({booking: {newOrder}}: any) => ({
    newOrder: newOrder.data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        ChangeOrderStatus: booking.ChangeOrderStatus
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectNavigatorPanelController);
