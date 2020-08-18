import React, {useState} from 'react';
import CurrentTripPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import DestinationDetailsPanelView from "../DestinationDetailsPanel/view";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
    destination: any;
}

const CurrentTripPanelController = ({ChangeOrderStatus, newOrder, destination}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

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
        />

    );
};

export default CurrentTripPanelController;
