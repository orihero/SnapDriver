import React, {useEffect} from 'react';
import {Text, View, StatusBar, FlatList} from 'react-native';
import Header1 from '@components/navigation/Header';
import colors from '@constants/colors';
import strings from '@constants/strings';
import HeaderTab from '@components/navigation/HeaderTab';
import constStyles from '@constants/constStyles';
import OrderCard from '@components/cards/OrderCard';
import styles from "./styles";

interface OrdersProps {
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

const OrdersScreenView = ({}: OrdersProps) => {
    //functions
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, []);

    return (
        <View style={styles.plane}>
            <View style={styles.tabWrapper}>
                <HeaderTab filter />
            </View>
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
                        <OrderCard item={item} navigation={{}} />
                    )}
                    keyExtractor={(index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default OrdersScreenView;
