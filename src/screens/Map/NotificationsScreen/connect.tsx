import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import NotificationsScreenController from "./controller";
import user from "@store/actions/user";

const mapStateToProps = ({user: {notifications}}: any) => ({
    notifications: notifications.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    GetNotifications: user.GetNotifications
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationsScreenController)
