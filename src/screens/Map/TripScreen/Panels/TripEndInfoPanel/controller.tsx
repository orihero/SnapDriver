import React from 'react';
import {useNavigation} from "@react-navigation/native";
import TripEndInfoPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import SCREENS from "@constants/screens";

interface IProps {
    SkipNewOrder: IAction;
    newOrder: any;
}

const TripEndInfoPanelPanelController = ({SkipNewOrder, newOrder}: IProps) => {
    const navigation = useNavigation();

    const goToMainScreen = () => {
        SkipNewOrder();
        navigation.navigate(SCREENS.MAP);
    };

    return (
        <TripEndInfoPanelView
            goToMainScreen={goToMainScreen}
            price={newOrder.price}
        />

    );
};

export default TripEndInfoPanelPanelController;
