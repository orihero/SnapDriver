import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import images from '../../assets/images';
import strings from '@constants/strings';
import Icon from '../../assets/icons';
import Button from '../common/Button';
import colors from '../../constants/colors';
import {CONTAINER_PADDING, BORDER_RADIUS} from '@constants/values';
import constStyles from '../../constants/constStyles';

interface OrderCardProps {
    navigation: NavigationScreenProp<{}>;
    item: {
        id: string;
        date: string;
        driveFrom: string;
        driveTo: string;
        price: string;
        currency: string;
        tax: string;
        paymentType: string;
    };
}

const OrderCard = ({navigation, item}: OrderCardProps) => {
    return (
        <View style={[styles.container, constStyles.shadow]}>
            <View style={styles.idAndDate}>
                <Text style={[styles.id, constStyles.light]}>{item.id}</Text>
                <Text style={[styles.date, constStyles.light]}>
                    {item.date}
                </Text>
            </View>
            <View style={styles.locationAndImage}>
                <Image
                    source={images.locationBorder}
                    style={styles.locationBorder}
                />
                <View style={styles.locationWrapper}>
                    <View style={[styles.location, styles.borderBottom]}>
                        <Text style={[styles.locationTitle, constStyles.light]}>
                            {strings.drivingFrom}
                        </Text>
                        <Text style={[styles.locationText, constStyles.bold]}>
                            {item.driveFrom}
                        </Text>
                    </View>
                    <View style={[styles.location, styles.borderBottom]}>
                        <Text style={[styles.locationTitle, constStyles.light]}>
                            {strings.drivingTo}
                        </Text>
                        <Text style={[styles.locationText, constStyles.bold]}>
                            {item.driveTo}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.priceWrapper, styles.borderBottom]}>
                <Text style={[styles.price, constStyles.light]}>
                    {strings.price}:{' '}
                </Text>
                <Text style={[styles.priceNum, constStyles.bold]}>
                    {item.price}
                </Text>
                <Text style={[styles.currency, constStyles.light]}>
                    {item.currency}{' '}
                </Text>
                <Text style={[styles.price, constStyles.light]}>
                    ({item.tax} {item.currency})
                </Text>
            </View>
            <View style={[styles.paymentType, styles.borderBottom]}>
                <Icon
                    name={item.paymentType == 'cash' ? 'cash' : 'card'}
                    color={colors.blue}
                    size={item.paymentType == 'cash' ? 25 : 20}
                />
                <Text style={[styles.paymentText, constStyles.bold]}>
                    {' '}
                    {strings.payment}:{' '}
                    {item.paymentType == 'cash'
                        ? strings.withCash
                        : strings.withCard}
                </Text>
            </View>
            <Button
                text={strings.complain}
                onPress={() => null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: CONTAINER_PADDING,
        marginBottom: 10,
        borderRadius: BORDER_RADIUS,
    },
    borderBottom: {
        borderBottomColor: colors.paleGray,
        borderBottomWidth: 0.7,
    },
    idAndDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    id: {fontSize: 14},
    date: {
        fontSize: 14,
    },
    locationAndImage: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    locationBorder: {
        height: 65,
        width: 15,
        resizeMode: 'contain',
        marginTop: 7,
    },
    locationWrapper: {
        width: '100%',
        paddingHorizontal: 10,
    },
    location: {
        width: '100%',
        paddingVertical: 5,
    },
    locationTitle: {fontSize: 14},
    locationText: {fontSize: 15},
    priceWrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    price: {
        fontSize: 16,
    },
    priceNum: {
        fontSize: 16,
        color: colors.blue,
    },
    currency: {
        fontSize: 16,
        color: colors.blue,
    },
    paymentType: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    paymentText: {
        color: colors.blue,
        fontSize: 15,
    },
});

export default OrderCard;
