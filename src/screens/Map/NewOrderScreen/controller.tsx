import React, {useState, useEffect} from 'react';
import {Vibration} from "react-native";
import NewOrderScreenView from "./view";
import IAction from "@store/types/IAction";
import {useNavigation} from "@react-navigation/native";
import SCREENS from "@constants/screens";

var Sound = require('react-native-sound');

interface IProps {
    newOrder: any;
    SkipNewOrder: IAction;
    AcceptNewOrder: IAction;
}

const NewOrderScreenController = ({newOrder, SkipNewOrder, AcceptNewOrder}: IProps) => {

    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false);
    const [sound, setSound] = useState(new Sound('new_order.mp3', Sound.MAIN_BUNDLE, () => {
        if (sound) {
            sound.play()
        }
    }));

    useEffect(() => {
        const PATTERN = [
            1000,
            750,
            1000,
            750,
            1000,
            750,
            1000,
            750,
        ];
        Vibration.vibrate(PATTERN);
    }, []);

    const stopNotify = () => {
        Vibration.cancel();
        if (sound) {
            sound.stop();
        }
        setSound(null)
    };


    const acceptNewOrder = () => {
        setIsLoading(true);
        stopNotify();
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
            skipNewOrder={() => {
                SkipNewOrder();
                stopNotify()
            }}
            acceptNewOrder={acceptNewOrder}
            isLoading={isLoading}
        />

    );
};

export default NewOrderScreenController;
