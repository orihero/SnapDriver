import React from 'react';
import {Text, View} from 'react-native';
import Icon from '@assets/icons';
import colors from '@constants/colors';
import constStyles from '@constants/constStyles';
import TouchablePlatformSpecific from "@components/common/TouchablePlatformSpecific";
import styles from "./styles";
import MapHeader from "@components/navigation/MapHeader";
import OrderStatus from "@constants/orderStatus";

interface InnerHeaderProps {
    topTitle: any;
    topData: string;
    bottomTitle: any;
    bottomData: string;
    number: string;
    onPhonePress: () => void;
    orderStatus: string;
    headerTitle?: string,
}

const TripHeader = (
    {
        headerTitle,
        topData,
        topTitle,
        bottomData,
        bottomTitle,
        onPhonePress,
        orderStatus,
    }: InnerHeaderProps
) => {
    const renderInnerHeader = () => {
        switch (orderStatus) {
            case OrderStatus.DONE:
                return <></>;
            case OrderStatus.RATING:
                return <></>;
            default:
                return (
                    <View style={styles.container}>
                        <View style={styles.dataWrapper}>
                            <View style={styles.topWrapper}>
                                <Text style={[styles.topText, constStyles.bold]}>{topTitle}</Text>
                                <Text style={[styles.topText, constStyles.bold]}>{' '}{topData}</Text>
                            </View>
                            <View style={styles.bottomWrapper}>
                                <Text style={[styles.bottomText, constStyles.bold]}>{bottomTitle}:</Text>
                                <Text style={[styles.bottomText, constStyles.bold]}>{' '}{bottomData}</Text>
                            </View>
                        </View>
                        <View style={[styles.iconWrapper, constStyles.shadow]}>
                            <TouchablePlatformSpecific onPress={onPhonePress}>
                                <View style={styles.icon}>
                                    <Icon name="phone" color={colors.blue} size={20}/>
                                </View>
                            </TouchablePlatformSpecific>
                        </View>
                    </View>)
        }
    };

    return (
        <MapHeader title={headerTitle}>
            {renderInnerHeader()}
        </MapHeader>
    );
};


export default TripHeader;
