import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, Platform, PermissionsAndroid} from "react-native";
import Geolocation from "@react-native-community/geolocation";
import haversine from 'haversine';
// @ts-ignore
import SystemSetting from "react-native-system-setting";

import Map from "./view";
import {colors} from "@constants/index";
import IAction from "@store/types/IAction";

interface IProps {
    GetCurrentLocation: IAction;
    SetDestinationDetails: IAction;
    currentLocation: any;
    newOrder: any;
}

const MapController = (
    {
        GetCurrentLocation,
        SetDestinationDetails,
        currentLocation,
        newOrder,
    }: IProps) => {
    const [mapRef, setMapRef] = useState(null);
    const [route, setRoute] = useState({});
    const [prevCoordinates, setPrevCoordinates] = useState({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
    });
    const [distanceTravelled, setDistanceTravelled] = useState(0);
    const [routeCoordinates, setRouteCoordinates] = useState([]);

    useEffect(() => {
        if (Object.keys(newOrder).length > 0) {
            if (newOrder.status === 'accepted') {
                setRoute({
                    from: {
                        longitude: Number(currentLocation.longitude),
                        latitude: Number(currentLocation.latitude)
                    },
                    to: {
                        longitude: Number(newOrder.routes[0].lng),
                        latitude: Number(newOrder.routes[0].lat)
                    }
                })
            } else {
                setRoute({
                    from: {
                        longitude: Number(newOrder.routes[0].lng),
                        latitude: Number(newOrder.routes[0].lat)
                    },
                    to: {
                        longitude: Number(newOrder.routes[1].lng),
                        latitude: Number(newOrder.routes[1].lat)
                    }
                })
            }
        } else {
            setRoute({})
        }
    }, [newOrder.status]);

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

        // Geolocation.watchPosition(
        //     position => {
        //         const {latitude, longitude} = position.coords;
        //
        //         const newCoordinate = {
        //             latitude,
        //             longitude
        //         };
        //         setDistanceTravelled(prevState => prevState + calcDistance(newCoordinate));
        //         // @ts-ignore
        //         setRouteCoordinates(prevState => [...prevState, newCoordinate]);
        //         setPrevCoordinates(newCoordinate)
        //     },
        //     (error) => console.log(error),
        //     {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000}
        // );

        // noinspection JSIgnoredPromiseFromCall
        requestPermission();

        checkGPSStatus();

        getCurrentLocation()

    }, []);

    const calcDistance = (newLatLng: any) => {
        return haversine(prevCoordinates, newLatLng) || 0;
    };

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
            setPrevCoordinates({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            })
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

    const onUserLocationChange = (coordinates: any) => {
        GetCurrentLocation(coordinates)
    };


    return (
        <Map
            getCurrentLocation={getCurrentLocation}
            setDestinationDetails={SetDestinationDetails}
            setMapRef={setMapRef}
            currentLocation={currentLocation}
            mapRef={mapRef}
            routeCoordinates={routeCoordinates}
            route={route}
            onUserLocationChange={onUserLocationChange}
            distanceTravelled={distanceTravelled}
        />
    );
};

export default MapController;
