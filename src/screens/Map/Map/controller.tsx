import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, Platform, PermissionsAndroid} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SystemSetting from "react-native-system-setting";
import Geolocation from "@react-native-community/geolocation";

import Map from "./view";
import {colors} from "@constants/index";
import IAction from "@store/types/IAction";

interface IProps {
    GetCurrentLocation: IAction;
    SetDestination: IAction;
    currentLocation: any;
}

const MapController = ({GetCurrentLocation, SetDestination, currentLocation}: IProps) => {
    const navigation = useNavigation();
    const [mapRef, setMapRef] = useState(null);


    useEffect(() => {
        if (mapRef) {
            // @ts-ignore
            mapRef.animateToRegion({
                ...currentLocation,
                latitudeDelta: 0.02,
                longitudeDelta: 0.01,
            })
        }
    }, [currentLocation]);

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);

        navigation.addListener('focus', () => {
            SetDestination();
        });

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();

        checkGPSStatus();

    }, []);

    const checkGPSStatus = () => {
        SystemSetting
            .isLocationEnabled()
            .then((enable: boolean) => {
                if (!enable) {
                    errorHandler()
                } else {
                    getCurrentLocation()
                }
            });
    };

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition((data) => {
            GetCurrentLocation(data.coords);
            console.log('success')
        }, error => {
            getCurrentLocation()
        })
    };

    const requestPermission = async () => {
        let hasPermission;
        if (Platform.OS === 'android') {
            hasPermission = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (!hasPermission) {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            }
        }
    };

    const errorHandler = () => {
        Alert.alert('Ошибка', 'Чтобы продолжить, включите на устройстве геолокацию Google.', [
            {
                text: 'OK', onPress: () => SystemSetting
                    .switchLocation(() => {
                        console.log('good job')
                    })
            }
        ])
    };


    return (
        <Map
            getCurrentLocation={getCurrentLocation}
            setMapRef={setMapRef}
            currentLocation={currentLocation}
        />
    );
};

export default MapController;
