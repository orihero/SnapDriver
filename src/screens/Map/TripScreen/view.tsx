import React from 'react';
import {View} from 'react-native';

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
}

const TripScreenView = ({orderStatus, orderInfo, onPhonePress}: IProps) => {

    const renderPanel = (orderStatus: string) => {
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

    return (
        <View style={styles.container}>
            <Map/>
            <View>
                <TripHeader
                    topTitle={strings.tillOrder}
                    topData="3 мин"
                    bottomTitle={strings.distance}
                    bottomData="0.5 км"
                    number={orderInfo.user.phone}
                    onPhonePress={onPhonePress}
                />
            </View>
            {renderPanel(orderStatus)}
        </View>
    );
};

export default TripScreenView;
