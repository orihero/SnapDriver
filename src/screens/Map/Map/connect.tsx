import {connect,} from "react-redux";
import MainScreenController from "./controller";
import {GetCurrentLocation, SetDestination} from "@store/constants/map";

const mapStateToProps = ({map:{destination, currentLocation}}: any) => ({
    currentLocation
});

const mapDispatchToProps = (dispatch: any) => ({
    GetCurrentLocation: (payload: any) => dispatch({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
    SetDestination: () => dispatch({
        type: SetDestination.SUCCESS,
        payload: null
    })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreenController);
