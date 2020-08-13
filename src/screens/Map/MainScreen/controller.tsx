import React, {useEffect, useState} from 'react';
import MainScreenView from "./view";
import {StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "@constants/colors";
import SCREENS from "@constants/screens";
import IAction from "@store/types/IAction";

interface IProps {
    navigation: StackNavigationProp<any>;
    SetDriverStatusOnline: IAction;
    SetDriverStatusOffline: IAction;
    NewOrder: IAction;
    driverStatus: boolean;

}

const MainScreenController = (
    {
        navigation,
        driverStatus,
        SetDriverStatusOffline,
        SetDriverStatusOnline,
        NewOrder
    }: IProps
) => {
    const [showTariff, setShowTariff] = useState(false);

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
    }, [navigation]);

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
            goToChat={routeTo(SCREENS.CHAT)}
            setShowTariff={setShowTariff}
            showTariff={showTariff}
            driverStatus={driverStatus}
            changeDriverStatus={changeDriverStatus}
        />
    );
};

export default MainScreenController;
