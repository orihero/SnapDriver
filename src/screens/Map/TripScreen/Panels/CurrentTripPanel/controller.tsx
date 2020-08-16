import React, {useState} from 'react';
import CurrentTripPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const CurrentTripPanelController = ({ChangeOrderStatus, newOrder}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const changeOrderStatus = () => {
        setIsLoading(true)
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
            isLoading={isLoading}
        />

    );
};

export default CurrentTripPanelController;
