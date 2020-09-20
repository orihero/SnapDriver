import React, {useEffect, useState} from 'react';
import MainScreenView from "./view";
import {StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import colors from "@constants/colors";
import SCREENS from "@constants/screens";
import IAction from "@store/types/IAction";
import NetInfo from "@react-native-community/netinfo";
import Geolocation from "@react-native-community/geolocation";

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
    }: IProps
) => {
    const [showTariff, setShowTariff] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor(colors.white);
            GetProfile()
        });

        NetInfo.addEventListener(state => {
            SetNetConnection(state.isConnected && state.isInternetReachable)
        });


        setInterval(() => {
            if (!driver.isBusy) {
                Geolocation.getCurrentPosition(position => {
                    const {coords: {latitude, longitude}} = position;
                    UpdateLocation({
                        lat: `${latitude}`,
                        lng: `${longitude}`
                    })
                })
            }
        }, 10000);


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
