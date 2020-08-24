import React, {useEffect, useState} from 'react';
import {Linking, StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";

import TripScreenView from "./view";
import OrderStatus from "@constants/orderStatus";
import colors from "@constants/colors";

interface IProps {
    navigation: StackNavigationProp<any>;
    newOrder: any;
    destination: any;
    SetWaiting: any;
}


const TripScreenController = ({SetWaiting, newOrder, destination}: IProps) => {

    const [orderStatus, setOrderStatus] = useState(OrderStatus.ACCEPTED);
    const [waitingTime, setWaitingTime] = useState(0);
    const [normalizedTime, setNormalizedTime] = useState('00:00');
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.grey);
    }, []);

    useEffect(() => {
        setOrderStatus(newOrder.data.status);

        if (newOrder.data.status === 'processing') {
            SetWaiting({
                time: waitingTime,
                status: false,
            });
            // @ts-ignore
            clearInterval(intervalId);
            setWaitingTime(0);
            // @ts-ignore
            return setIntervalId(setInterval(() => {
                setWaitingTime(prevState => prevState + 1);
            }, 1000))
        }

        if (newOrder.data.status === 'done') {
            // @ts-ignore
            return clearInterval(intervalId);

        }


        if (newOrder.data.status === 'arrived') {
            SetWaiting({
                time: 0,
                status: true,
            });
            // @ts-ignore
            setIntervalId(setInterval(() => {
                setWaitingTime(prevState => prevState + 1);
            }, 1000))
        }

    }, [newOrder.data.status]);

    useEffect(() => {
        const value = setTime();
        setNormalizedTime(value);
    }, [waitingTime]);


    const onPhonePress = async () => {
        await Linking.openURL(`tel:${newOrder.data.user.phone}`)
    };


    const setTime = () => {
        return `${pad(parseInt(String(waitingTime / 60)))}:${pad(waitingTime % 60)}`
    };

    const pad = (val: number) => {
        const valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    };

    return (
        <TripScreenView
            orderStatus={orderStatus}
            orderInfo={newOrder.data}
            onPhonePress={onPhonePress}
            destination={destination}
            waitingTime={normalizedTime}
        />

    );
};

export default TripScreenController;
