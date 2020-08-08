import {bindActionCreators} from "redux";
import {connect, DispatchProp} from "react-redux";

import auth from "@store/actions/auth";
import LoginScreenController from "./controller";

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    Login: auth.Login
}, dispatch);

export default connect(null, mapDispatchToProps)(LoginScreenController);
