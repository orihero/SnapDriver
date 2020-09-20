import React from 'react';
import {Text, View, NativeSyntheticEvent, NativeScrollEvent, Animated} from 'react-native';

import strings from '@constants/strings';
import HeaderTab from '@components/navigation/HeaderTab';
import constStyles from '@constants/constStyles';
import OrderCard from '@components/cards/OrderCard';
import styles from "./styles";
import Header from "@components/navigation/Header";

interface IProps {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    orderList: any;
    headerHeight: any;
    changePeriod: () => void;
}

const OrdersScreenView = ({onScroll, orderList, headerHeight, changePeriod}: IProps) => {

    return (
        <View style={{flex: 1}}>
            <Header
                title={strings.orders}
                style={{
                    transform: [{translateY: headerHeight}],
                    position: 'absolute',
                    zIndex: 999,
                    height: 80,
                    top: 0,
                    left: 0,
                    right: 0,
                    marginBottom: 0,
                    borderBottomEndRadius: 0,
                    borderBottomStartRadius: 0,
                }}
            />
            <View style={styles.plane}>
                <Animated.SectionList
                    renderSectionHeader={() =>
                        <>
                            <View style={styles.tabWrapper}>
                                <HeaderTab changePeriod={changePeriod}/>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.earningDetail}>
                                    <Text style={[styles.titleText, constStyles.bold]}>{strings.allOrders}</Text>
                                    <View style={styles.rightText}>
                                        <Text style={[styles.price, constStyles.bold]}>245500</Text>
                                        <Text style={[styles.currency, constStyles.light]}>{' '}сум</Text>
                                    </View>
                                </View>
                                <View style={styles.earningDetail}>
                                    <Text style={[styles.titleText, constStyles.bold]}>{strings.sumTax}</Text>
                                    <View style={styles.rightText}>
                                        <Text style={[styles.price, constStyles.bold]}>245500</Text>
                                        <Text style={[styles.currency, constStyles.light]}>{' '}сум</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    }
                    stickySectionHeadersEnabled={true}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.ordersWrapper}
                    data={orderList}
                    onScroll={onScroll}
                    renderItem={({item}: any) => (
                        <OrderCard
                            item={item}
                        />
                    )}
                    keyExtractor={(item: any) => item.id}
                    sections={[{title: 'ss', data: orderList}]}
                />
            </View>
        </View>
    );
};

export default OrdersScreenView;
