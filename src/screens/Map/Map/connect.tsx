import {connect,} from "react-redux";
import MainScreenController from "./controller";
import {GetCurrentLocation, SetDestination, SetDestinationDetails} from "@store/constants/map";

const mapStateToProps = ({map: {currentLocation}, booking: {newOrder}}: any) => ({
    currentLocation,
    newOrder: newOrder.data,
});

const mapDispatchToProps = (dispatch: any) => ({
    GetCurrentLocation: (payload: any) => dispatch({
        type: GetCurrentLocation.SUCCESS,
        payload,
    }),
    SetDestinationDetails: (payload: any) => dispatch({
        type: SetDestinationDetails.SUCCESS,
        payload
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
