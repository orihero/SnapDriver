import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import NewOrderScreenController from "./controller";
import {SkipNewOrder} from "@store/constants/booking";

const mapStateToProps = ({booking: {newOrderModal}}: any) => ({
    newOrderModal
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        SkipNewOrder: () => ({
            type: SkipNewOrder.SUCCESS,
        })
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewOrderScreenController);
