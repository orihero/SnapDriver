import React from 'react';
import TripEndInfoPanelView from "./view";
import IAction from "@store/types/IAction";
import SCREENS from "@constants/screens";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const TripEndInfoPanelPanelController = ({newOrder, ChangeOrderStatus}: IProps) => {

    const changeOrderStatus = () => {
        ChangeOrderStatus({
            ...newOrder,
            status: 'rating'
        })
    };

    return (
        <TripEndInfoPanelView
            changeOrderStatus={changeOrderStatus}
            newOrder={newOrder}
        />

    );
};

export default TripEndInfoPanelPanelController;
