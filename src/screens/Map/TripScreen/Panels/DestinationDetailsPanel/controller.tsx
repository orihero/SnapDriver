import React, {useRef, useState} from 'react';
import {Animated} from "react-native";
import DestinationDetailsPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import {PanResponder} from "react-native";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
}

const DestinationDetailsPanelController = ({ChangeOrderStatus, newOrder}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);

    const height = useRef(new Animated.Value(0)).current;

    const panResPonder = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return !(gestureState.dy === 0 || (gestureState.dy < 1 && gestureState.dy > -2))
        },
        onPanResponderGrant: (evt, gestureState) => {
            // @ts-ignore
            height.setOffset(height._value)
        },
        onPanResponderMove: (evt, gestureState) => {
            height.setValue(gestureState.dy * -1);
        },
        onPanResponderRelease: (evt, gestureState) => {
            height.flattenOffset();
            if (gestureState.dy > 0) {
                Animated.spring(height, {
                    toValue: 0,
                    useNativeDriver: false
                }).start()
            } else if (gestureState.dy < 0) {
                Animated.spring(height, {
                    toValue: 180,
                    useNativeDriver: false
                }).start()
            }
        }
    })).current;

    const collapse = height.interpolate({
        inputRange: [-1, 180],
        outputRange: [0, 180],
        extrapolate: 'clamp'
    });


    const changeOrderStatus = () => {
        setIsLoading(true);
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.id,
            orderId: data.id,
            orderStatus: OrderStatus.PROCESSING
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    return (
        <DestinationDetailsPanelView
            changeOrderStatus={changeOrderStatus}
            isLoading={isLoading}
            drivingFrom={newOrder.data.routes[0].address}
            drivingTo={newOrder.data.routes[1].address}
            panResPonder={panResPonder}
            collapse={collapse}
        />
    );
};

export default DestinationDetailsPanelController;
