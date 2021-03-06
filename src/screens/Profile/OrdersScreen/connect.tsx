import {bindActionCreators, Dispatch} from "redux";
import {connect,} from "react-redux";

import booking from "@store/actions/booking";
import OrdersScreenController from "./controller";

const mapStateToProps = ({booking: {list}}: any) => ({
    orderList: list
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        GetOrderList: booking.GetOrderList,
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersScreenController);
