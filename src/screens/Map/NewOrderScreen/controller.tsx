import React from 'react';
import NewOrderScreenView from "./view";
import IAction from "@store/types/IAction";
import {useNavigation} from "@react-navigation/native";
import SCREENS from "@constants/screens";

interface IProps {
    newOrderModal: any;
    SkipNewOrder: IAction;
    AcceptNewOrder: IAction;
}

const NewOrderScreenController = ({newOrderModal, SkipNewOrder, AcceptNewOrder}: IProps) => {

    const navigation = useNavigation();

    const acceptNewOrder = () => {
        AcceptNewOrder({
            orderId: newOrderModal.data.booking.id,
            driverId: 28,
        }, () => {
            navigation.reset({
                index: 0,
                routes: [{name: SCREENS.TRIP}]
            })
        })
    };

    return (
        <NewOrderScreenView
            visible={newOrderModal.visible}
            skipNewOrder={SkipNewOrder}
            acceptNewOrder={acceptNewOrder}
        />

    );
};

export default NewOrderScreenController;
