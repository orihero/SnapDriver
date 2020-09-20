import React, {useEffect, useRef} from 'react';
import OrdersScreenView from "./view";
import {Animated, StatusBar} from "react-native";
import colors from "@constants/colors";
import {StackNavigationProp} from "@react-navigation/stack";
import IAction from "@store/types/IAction";
import moment from "moment";

interface IProps {
    navigation: StackNavigationProp<any>;
    orderList: any;
    GetOrderList: IAction;
}

const OrdersScreenController = ({navigation, orderList, GetOrderList}: IProps) => {

        const scrollOffsetY = useRef(new Animated.Value(0)).current;

        const HEADER_EXPANDED_HEIGHT = 80;

        useEffect(() => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(colors.blue);
            GetOrderList()
        }, [navigation]);

        const headerHeight = scrollOffsetY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT],
            outputRange: [0, -HEADER_EXPANDED_HEIGHT],
            extrapolate: 'clamp',
        });

        const changePeriod = () => {

        };

        return (
            <OrdersScreenView
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollOffsetY}}}
                ], {useNativeDriver: true})}
                orderList={orderList.data}
                headerHeight={headerHeight}
                changePeriod={changePeriod}
            />
        );
    }
;

export default OrdersScreenController;
