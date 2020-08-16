import React, {useEffect, useState} from 'react';
import {Linking, StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";

import TripScreenView from "./view";
import OrderStatus from "@constants/orderStatus";
import colors from "@constants/colors";

interface IProps {
    navigation: StackNavigationProp<any>;
    newOrder: any;
}


const TripScreenController = ({navigation, newOrder}: IProps) => {

    const [orderStatus, setOrderStatus] = useState(OrderStatus.ACCEPTED);

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.grey);
    }, []);

    useEffect(() => {
        setOrderStatus(newOrder.data.status);
    }, [newOrder.data.status]);

    const onPhonePress = async () => {
        await Linking.openURL(`tel:${newOrder.data.user.phone}`)
    };

    return (
        <TripScreenView
            orderStatus={orderStatus}
            orderInfo={newOrder.data}
            onPhonePress={onPhonePress}
        />

    );
};

export default TripScreenController;
