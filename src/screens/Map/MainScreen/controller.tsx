import React, {useEffect, useState} from 'react';
import MainScreenView from "./view";
import {StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "@constants/colors";
import SCREENS from "@constants/screens";
import IAction from "@store/types/IAction";
import NetInfo from "@react-native-community/netinfo";

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
    }: IProps
) => {
    const [showTariff, setShowTariff] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(colors.white);
        });

        NetInfo.addEventListener(state => {
            SetNetConnection(state.isConnected && state.isInternetReachable)
        });

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
            goToChat={routeTo(SCREENS.CHAT)}
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
