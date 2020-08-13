import React, {useEffect, useRef} from 'react';
import OrdersScreenView from "./view";
import {Animated, NativeScrollEvent, NativeSyntheticEvent, StatusBar} from "react-native";
import colors from "@constants/colors";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
    navigation: StackNavigationProp<any>;
}

const OrdersScreenController = ({navigation}: IProps) => {

        const animatedHeight = useRef(new Animated.Value(80)).current;
        useEffect(() => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(colors.blue);
        }, [navigation]);

        const startAnimation = (value: number) => {
            Animated.timing(
                animatedHeight,
                {
                    duration: 0,
                    toValue: calcHeight(value),
                    useNativeDriver: false
                }
            ).start()
        };

        const calcHeight = (value: number) => {
            if (value >= 80) {
                return 0
            } else {
                return 80 - value
            }
        };


        const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
            startAnimation(nativeEvent.contentOffset.y)
        };

        return (
            <OrdersScreenView
                onScroll={Animated.event([{nativeEvent: {contentOffset: {y: animatedHeight}}}])}
                animatedHeight={animatedHeight.interpolate({
                    inputRange: [0, 80],
                    outputRange: [80, 0],
                    extrapolate: 'clamp'
                })}
            />
        );
    }
;

export default OrdersScreenController;
