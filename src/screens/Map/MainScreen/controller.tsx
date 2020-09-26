import React, {useEffect, useState} from 'react';
import MainScreenView from "./view";
import {StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "@constants/colors";
import SCREENS from "@constants/screens";
import IAction from "@store/types/IAction";
import NetInfo from "@react-native-community/netinfo";
import Geolocation from "@react-native-community/geolocation";

const PushNotification = require("react-native-push-notification");

interface IProps {
    navigation: StackNavigationProp<any>;
    SetDriverStatusOnline: IAction;
    SetDriverStatusOffline: IAction;
    NewOrder: IAction;
    SetNetConnection: IAction;
    driver: any;
    newOrder: any;
    isNetConnected: boolean;
    car: any;
    UpdateLocation: IAction;
    GetProfile: IAction;
    SendPush: any;
}

const MainScreenController = (
    {
        navigation,
        driver,
        SetDriverStatusOffline,
        SetDriverStatusOnline,
        NewOrder,
        newOrder,
        SetNetConnection,
        isNetConnected,
        car,
        UpdateLocation,
        GetProfile,
        SendPush
    }: IProps
) => {
    const [showTariff, setShowTariff] = useState(false);
    const [intervalId, setIntervalId] = useState<any>();

    useEffect(() => {
        navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(colors.white);
            GetProfile()
        });

        NetInfo.addEventListener(state => {
            SetNetConnection(state.isConnected && state.isInternetReachable)
        });

        // setInterval(() => {
        //     if (!driver.isBusy) {
        //         Geolocation.getCurrentPosition(position => {
        //             const {coords: {latitude, longitude}} = position;
        //             UpdateLocation({
        //                 lat: `${latitude}`,
        //                 lng: `${longitude}`
        //             })
        //         })
        //     }
        // }, 10000)
        setIntervalId(null);

        PushNotification.configure({

            onNotification: (notification: any) => {
                if (notification.title === "message") {
                    SendPush({
                        id: notification.data.notification_id,
                        message: notification.message
                    })
                }
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
        return clearInterval(intervalId);
    }, []);

    const routeTo = (screen: string) => () => {
        navigation.navigate(screen)
    };

    const changeDriverStatus = () => {
        if (driver.status) {
            SetDriverStatusOffline()
        } else {
            SetDriverStatusOnline({
                carId: car.id,
            }, (bookingInfo) => {
                !driver.isBusy && NewOrder(bookingInfo)
            })
        }
    };

    return (
        <MainScreenView
            isNetConnected={isNetConnected}
            goToChat={routeTo(SCREENS.NOTIFICATIONS)}
            setShowTariff={setShowTariff}
            showTariff={showTariff}
            driverStatus={driver.status}
            changeDriverStatus={changeDriverStatus}
            isModalVisible={newOrder.isModalVisible}
            rates={car.rates}
        />
    );
};

export default MainScreenController;
