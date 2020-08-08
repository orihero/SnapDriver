import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import RegisterDriverScreenController from "./controller";
import user from "@store/actions/user";


const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    UpdateProfile: user.UpdateProfile,
}, dispatch);


export default connect(
    null,
    mapDispatchToProps
)(RegisterDriverScreenController);
