import React from 'react';
import {Text, View, FlatList, NativeSyntheticEvent, NativeScrollEvent, Animated} from 'react-native';
import strings from '@constants/strings';
import HeaderTab from '@components/navigation/HeaderTab';
import constStyles from '@constants/constStyles';
import OrderCard from '@components/cards/OrderCard';
import styles from "./styles";
import Header from "@components/navigation/Header";


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

interface IProps {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    animatedHeight: any;
}

const OrdersScreenView = ({onScroll, animatedHeight}: IProps) => {

    return (
        <>
            <Header
                title={strings.orders}
                style={{
                    marginBottom: 0,
                    borderBottomEndRadius: 0,
                    borderBottomStartRadius: 0,
                    height: animatedHeight
                }}
            />
            <View style={styles.plane}>
                <View style={styles.tabWrapper}>
                    <HeaderTab/>
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
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.ordersWrapper}
                        data={orderList}
                        onScroll={onScroll}
                        renderItem={({item}) => (
                            <OrderCard item={item} navigation={{}}/>
                        )}
                        keyExtractor={(item) => item.id}
                    >
                        <Text>sds</Text>
                    </FlatList>
                </View>
            </View>
        </>
    );
};

export default OrdersScreenView;
