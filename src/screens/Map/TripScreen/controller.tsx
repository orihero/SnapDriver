import React, {useEffect, useState} from 'react';
import {Linking, StatusBar} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";

import TripScreenView from "./view";
import OrderStatus from "@constants/orderStatus";
import colors from "@constants/colors";
import {getDistance} from "geolib";
import Geolocation from "@react-native-community/geolocation";

interface IProps {
    navigation: StackNavigationProp<any>;
    newOrder: any;
    destination: any;
    SetWaiting: any;
}


const TripScreenController = ({SetWaiting, newOrder, destination,}: IProps) => {

    const [orderStatus, setOrderStatus] = useState(OrderStatus.ACCEPTED);
    const [waitingTime, setWaitingTime] = useState(0);
    const [normalizedTime, setNormalizedTime] = useState('00:00');
    const [travelTime, setTravelTime] = useState(0);
    const [normalizedTravelTime, setNormalizedTravelTime] = useState('00:00');
    const [intervalId, setIntervalId] = useState(null);
    const [distanceToClient, setDistanceToClient] = useState(destination.distance);
    const [watchId, setWatchId] = useState();

    useEffect(() => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.grey);
        setWatchId(calcDistance(0))
    }, []);

    useEffect(() => {
        setOrderStatus(newOrder.data.status);

        if (newOrder.data.status === OrderStatus.PROCESSING) {
            SetWaiting({
                time: waitingTime,
                status: false,
            });
            clearInterval(intervalId);
            return setIntervalId(setInterval(() => {
                setTravelTime(prevState => prevState + 1);
            }, 1000))
        }

        if (newOrder.data.status === OrderStatus.WAITING) {
            SetWaiting({
                time: waitingTime,
                status: true,
            });
            clearInterval(intervalId);
            return setIntervalId(setInterval(() => {
                setWaitingTime(prevState => prevState + 1);
            }, 1000))
        }

        if (newOrder.data.status === OrderStatus.DONE) {
            Geolocation.clearWatch(watchId);
            return clearInterval(intervalId);

        }


        if (newOrder.data.status === OrderStatus.ARRIVED) {
            Geolocation.clearWatch(watchId);
            SetWaiting({
                time: 0,
                status: true,
            });
            setWatchId(calcDistance(1));
            // @ts-ignore
            setIntervalId(setInterval(() => {
                setWaitingTime(prevState => prevState + 1);
            }, 1000))
        }

    }, [newOrder.data.status]);

    useEffect(() => {
        const value = setTime(waitingTime);
        setNormalizedTime(value);
    }, [waitingTime]);

    useEffect(() => {
        const value = setTime(travelTime);
        setNormalizedTravelTime(value);
    }, [travelTime]);


    const calcDistance = (routeIndex: number) => {
        return Geolocation.watchPosition(position => {
            const {longitude, latitude} = position.coords;
            setDistanceToClient(
                getDistance(
                    {
                        latitude,
                        longitude
                    },
                    {
                        latitude: newOrder.data.routes[routeIndex].lat,
                        longitude: newOrder.data.routes[routeIndex].lng
                    }
                )
            )
        }, err => {
        })
    };

    const onPhonePress = async () => {
        await Linking.openURL(`tel:${newOrder.data.user.phone}`)
    };


    const setTime = (time: number) => {
        return `${pad(parseInt(String(time / 60)))}:${pad(time % 60)}`
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
            travelTime={normalizedTravelTime}
            distanceToClient={(distanceToClient / 1000).toFixed(2)}
        />

    );
};

export default TripScreenController;
