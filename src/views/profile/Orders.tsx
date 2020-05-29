import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Header from '../../components/navigation/Header';
import colors from '../../constants/colors';
import strings from '../../locales/strings';
import HeaderTab from '../../components/navigation/HeaderTab';
import {CONTAINER_PADDING} from '../../constants/values';
import constStyles from '../../constants/constStyles';
import OrderCard from '../../components/cards/OrderCard';

interface OrdersProps {
    navigation: NavigationScreenProp<{}>;
}

const orderList = [
    {
        id: '4562455865',
        date: '12.03.2020',
        driveFrom: 'Саларская набережаная 35',
        driveTo: 'Дом',
        price: '12 500',
        currency: 'сум',
        tax: '2500',
        paymentType: 'card',
    },
    {
        id: '4562455866',
        date: '12.03.2020',
        driveFrom: 'Саларская набережаная 35',
        driveTo: 'Дом',
        price: '12 500',
        currency: 'сум',
        tax: '2500',
        paymentType: 'cash',
    },
    {
        id: '4562455867',
        date: '12.03.2020',
        driveFrom: 'Саларская набережаная 35',
        driveTo: 'Дом',
        price: '12 500',
        currency: 'сум',
        tax: '2500',
        paymentType: 'card',
    },
];

const Orders = ({navigation}: OrdersProps) => {
    //functions
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, [navigation]);

    return (
        <View style={styles.plane}>
            <Header
                navigation={navigation}
                backArrow
                backColor={colors.blue}
                title={strings.myOrders}
                childBgColor={colors.blue}>
                <View style={styles.tabWrapper}>
                    <HeaderTab filter />
                </View>
            </Header>
            <View style={styles.container}>
                <View style={styles.earningDetail}>
                    <Text style={[styles.titleText, constStyles.bold]}>
                        {strings.allOrders}
                    </Text>
                    <View style={styles.rightText}>
                        <Text style={[styles.price, constStyles.bold]}>
                            245500
                        </Text>
                        <Text style={[styles.currency, constStyles.light]}>
                            {' '}
                            сум
                        </Text>
                    </View>
                </View>
                <View style={styles.earningDetail}>
                    <Text style={[styles.titleText, constStyles.bold]}>
                        {strings.sumTax}
                    </Text>
                    <View style={styles.rightText}>
                        <Text style={[styles.price, constStyles.bold]}>
                            245500
                        </Text>
                        <Text style={[styles.currency, constStyles.light]}>
                            {' '}
                            сум
                        </Text>
                    </View>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ordersWrapper}
                    data={orderList}
                    renderItem={({item}) => (
                        <OrderCard item={item} navigation={navigation} />
                    )}
                    keyExtractor={(index) => index.toString()}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    plane: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        // paddingHorizontal: CONTAINER_PADDING,
    },
    tabWrapper: {
        paddingHorizontal: CONTAINER_PADDING,
        paddingVertical: 5,
    },
    earningDetail: {
        paddingHorizontal: CONTAINER_PADDING,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: colors.superPaleGray,
        borderBottomWidth: 0.5,
        alignItems: 'baseline',
    },
    titleText: {
        color: colors.black,
        fontSize: 14,
    },
    rightText: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    price: {
        fontSize: 18,
        color: colors.blue,
    },
    currency: {
        fontSize: 16,
        color: colors.blue,
    },
    ordersWrapper: {
        paddingTop: 10,
        paddingHorizontal: CONTAINER_PADDING,
    },
});

export default Orders;
