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
    GetCar: IAction;
    NewOrder: IAction;
    SetNetConnection: IAction;
    driverStatus: boolean;
    newOrder: any;
    isNetConnected: boolean;
}

const MainScreenController = (
    {
        navigation,
        driverStatus,
        SetDriverStatusOffline,
        SetDriverStatusOnline,
        GetCar,
        NewOrder,
        newOrder,
        SetNetConnection,
        isNetConnected,
    }: IProps
) => {
    const [showTariff, setShowTariff] = useState(false);

    useEffect(() => {

        GetCar();

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
        if (driverStatus) {
            SetDriverStatusOffline()
        } else {
            SetDriverStatusOnline({}, (bookingInfo) => {
                NewOrder(bookingInfo)
            })
        }
    };

    return (
        <MainScreenView
            isNetConnected={isNetConnected}
            goToChat={routeTo(SCREENS.CHAT)}
            setShowTariff={setShowTariff}
            showTariff={showTariff}
            driverStatus={driverStatus}
            changeDriverStatus={changeDriverStatus}
            isModalVisible={newOrder.isModalVisible}
        />
    );
};

export default MainScreenController;
