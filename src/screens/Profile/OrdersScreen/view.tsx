import React from 'react';
import {Text, View, FlatList, NativeSyntheticEvent, NativeScrollEvent, Animated} from 'react-native';

import strings from '@constants/strings';
import HeaderTab from '@components/navigation/HeaderTab';
import constStyles from '@constants/constStyles';
import OrderCard from '@components/cards/OrderCard';
import styles from "./styles";
import Header from "@components/navigation/Header";

interface IProps {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    animatedHeight: any;
    orderList: any
}

const OrdersScreenView = ({onScroll, orderList}: IProps) => {

    return (
        <>
            <Header
                title={strings.orders}
                style={{
                    marginBottom: 0,
                    borderBottomEndRadius: 0,
                    borderBottomStartRadius: 0,
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
                            <OrderCard
                                item={item}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    );
};

export default OrdersScreenView;
