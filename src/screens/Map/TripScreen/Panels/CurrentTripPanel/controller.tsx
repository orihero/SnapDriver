import React, {useState} from 'react';
import CurrentTripPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import DestinationDetailsPanelView from "../DestinationDetailsPanel/view";
import {Linking, Platform} from "react-native";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
    destination: any;
}

const CurrentTripPanelController = ({ChangeOrderStatus, newOrder, destination}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const openGoogleMaps = () => {
        const {routes} = newOrder.data;
        const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
        const latLng = `${routes[1].lat},${routes[1].lng}`;
        const url = Platform.select({
            ios: `${scheme}@${latLng}`,
            android: `${scheme}${latLng}`
        });

        Linking.openURL(url as string).then();
    };


    const changeOrderStatus = () => {
        setIsLoading(true);
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.DONE
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    return (
        <CurrentTripPanelView
            changeOrderStatus={changeOrderStatus}
            drivingTo={newOrder.data.routes[1].address}
            isLoading={isLoading}
            duration={destination.details.duration}
            distance={destination.details.distance}
            openGoogleMaps={openGoogleMaps}
        />

    );
};

export default CurrentTripPanelController;
