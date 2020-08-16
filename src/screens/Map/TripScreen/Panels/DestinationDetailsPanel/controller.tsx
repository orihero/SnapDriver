import React, {useState} from 'react';
import DestinationDetailsPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import SelectNavigatorPanelView from "../SelectNavigatorPanel/view";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const DestinationDetailsPanelController = ({ChangeOrderStatus, newOrder}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const changeOrderStatus = () => {
        setIsLoading(true)
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.PROCESSING
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    return (
        <DestinationDetailsPanelView
            changeOrderStatus={changeOrderStatus}
            isLoading={isLoading}
            drivingFrom={newOrder.data.routes[0].address}
            drivingTo={newOrder.data.routes[1].address}
        />
    );
};

export default DestinationDetailsPanelController;
