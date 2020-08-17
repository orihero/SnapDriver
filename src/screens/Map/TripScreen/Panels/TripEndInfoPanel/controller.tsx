import React from 'react';
import {useNavigation} from "@react-navigation/native";
import TripEndInfoPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import SCREENS from "@constants/screens";

interface IProps {
    ChangeOrderStatus: IAction;
    SkipNewOrder: IAction;
    newOrder: any;
}

const TripEndInfoPanelPanelController = ({ChangeOrderStatus, SkipNewOrder, newOrder}: IProps) => {
    const navigation = useNavigation();
    const changeOrderStatus = () => {
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.ARRIVED
        }, () => {
            navigation.navigate(SCREENS.MAP);
            SkipNewOrder()
        })
    };

    return (
        <TripEndInfoPanelView
            changeOrderStatus={changeOrderStatus}
        />

    );
};

export default TripEndInfoPanelPanelController;
