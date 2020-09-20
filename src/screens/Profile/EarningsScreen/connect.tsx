import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import EarningsController from "./controller";
import user from "@store/actions/user";

const mapStateToProps = ({user}: any) => ({
    user: user.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    GetStatistics: user.GetStatistics
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EarningsController);
