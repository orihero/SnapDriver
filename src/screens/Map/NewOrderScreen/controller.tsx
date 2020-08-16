import React, {useState} from 'react';
import NewOrderScreenView from "./view";
import IAction from "@store/types/IAction";
import {useNavigation} from "@react-navigation/native";
import SCREENS from "@constants/screens";

interface IProps {
    newOrder: any;
    SkipNewOrder: IAction;
    AcceptNewOrder: IAction;
}

const NewOrderScreenController = ({newOrder, SkipNewOrder, AcceptNewOrder}: IProps) => {

    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);

    const acceptNewOrder = () => {
        setIsLoading(true);
        AcceptNewOrder({
            orderId: newOrder.data.id,
            driverId: 28,
        }, () => {
            setIsLoading(false);
            navigation.reset({
                index: 0,
                routes: [{name: SCREENS.TRIP}]
            })
        }, () => {
            setIsLoading(false);
        })
    };

    return (
        <NewOrderScreenView
            visible={newOrder.isModalVisible}
            orderDetails={newOrder.data}
            skipNewOrder={SkipNewOrder}
            acceptNewOrder={acceptNewOrder}
            isLoading={isLoading}
        />

    );
};

export default NewOrderScreenController;
