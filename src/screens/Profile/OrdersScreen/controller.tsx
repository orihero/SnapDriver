import React, {useEffect, useState, useRef} from 'react';
import OrdersScreenView from "./view";
import {Animated, StatusBar} from "react-native";
import colors from "@constants/colors";
import {StackNavigationProp} from "@react-navigation/stack";
import IAction from "@store/types/IAction";
import moment from "moment";

interface IProps {
    navigation: StackNavigationProp<any>;
    orderList: {
        data: Array<any>
    };
    GetOrderList: IAction;
}

const OrdersScreenController = ({navigation, orderList, GetOrderList}: IProps) => {

        const scrollOffsetY = useRef(new Animated.Value(0)).current;

        const HEADER_EXPANDED_HEIGHT = 80;

        const [profit, setProfit] = useState(0);
        const [commission, setCommission] = useState(0);


        useEffect(() => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(colors.blue);
            GetOrderList()
        }, [navigation]);

        useEffect(() => {
            orderList.data.forEach(item => {
                setProfit(prevState => prevState + item.price);
                setCommission(prevState => prevState + item.commission)
            });
        }, [orderList]);

        const headerHeight = scrollOffsetY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT],
            outputRange: [0, -HEADER_EXPANDED_HEIGHT],
            extrapolate: 'clamp',
        });

        const changePeriod = (dateFrom: any, dateTo: any) => {
            setProfit(0);
            setCommission(0);
            GetOrderList({
                dateFrom: dateFrom,
                dateTo: dateTo,
            })
        };

        return (
            <OrdersScreenView
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollOffsetY}}}
                ], {useNativeDriver: true})}
                profit={profit}
                commission={commission}
                orderList={orderList.data}
                headerHeight={headerHeight}
                changePeriod={changePeriod}
            />
        );
    }
;

export default OrdersScreenController;
