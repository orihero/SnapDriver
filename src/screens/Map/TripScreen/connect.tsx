import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import TripScreenController from "./controller";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({}, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TripScreenController);
