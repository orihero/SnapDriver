import React from 'react';
import TripEndInfoPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const TripEndInfoPanelPanelController = ({ChangeOrderStatus, newOrder}: IProps) => {

    const changeOrderStatus = () => {
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.ARRIVED
        })
    };

    return (
        <TripEndInfoPanelView
            changeOrderStatus={changeOrderStatus}
        />

    );
};

export default TripEndInfoPanelPanelController;
