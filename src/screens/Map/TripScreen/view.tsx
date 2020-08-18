import React from 'react';
import {Text, View} from 'react-native';

import Map from '../Map';
import {
    CurrentTripPanel,
    DestinationDetailsPanel,
    SelectNavigatorPanel,
    TripEndInfoPanel
} from "./Panels";
import strings from '@constants/strings';
import TripHeader from "@components/navigation/TripHeader";
import OrderStatus from "@constants/orderStatus";
import styles from "./styles";


interface IProps {
    orderStatus: string;
    orderInfo: any;
    onPhonePress: () => void;
    destination: any;
    waitingTime: string;
}

const TripScreenView = ({orderStatus, waitingTime, onPhonePress, destination}: IProps) => {

    const renderPanel = () => {
        switch (orderStatus) {
            case OrderStatus.ACCEPTED:
                return <SelectNavigatorPanel/>;
            case OrderStatus.ARRIVED:
                return <DestinationDetailsPanel/>;
            case OrderStatus.PROCESSING:
                return <CurrentTripPanel/>;
            case OrderStatus.DONE:
                return <TripEndInfoPanel/>;
        }
    };

    const headerText = () => {
        switch (orderStatus) {
            case OrderStatus.ACCEPTED:
                return {
                    headerTitle: strings.acceptedOrder,
                    title: strings.tillOrder,
                    data: destination.duration + ' мин'
                };
            case OrderStatus.ARRIVED:
                return {
                    headerTitle: strings.acceptedOrder,
                    title: strings.waitingTime,
                    data: waitingTime,
                };
            case OrderStatus.PROCESSING:
                return {
                    headerTitle: 'В пути',
                    title: strings.tripTime,
                    data: waitingTime,
                };
            case OrderStatus.DONE:
                return {
                    headerTitle: 'Завершение заказа',
                    title: strings.waitingTime,
                    data: waitingTime,
                };
            default:
                return {}
        }
    };

    return (
        <View style={styles.container}>
            <Map/>
            <View>
                <TripHeader
                    headerTitle={headerText().headerTitle}
                    orderStatus={orderStatus}
                    topTitle={`${headerText().title}`}
                    topData={`${headerText().data} `}
                    bottomTitle={strings.distance}
                    bottomData={`${destination.distance} км`}
                    number={'orderInfo && orderInfo.user.phone'}
                    onPhonePress={onPhonePress}
                />
            </View>
            {renderPanel()}
        </View>
    );
};

export default TripScreenView;
