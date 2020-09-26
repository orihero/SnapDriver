import React, {useState} from 'react';
import CurrentTripPanelView from "./view";
import IAction from "@store/types/IAction";
import OrderStatus from "@constants/orderStatus";
import {Linking, Platform} from "react-native";
import SCREENS from "@constants/screens";
import {useNavigation} from "@react-navigation/native";

interface IProps {
    ChangeOrderStatus: IAction;
    newOrder: any;
    destination: any;
    waiting: any;
}

const CurrentTripPanelController = ({ChangeOrderStatus, waiting, newOrder, destination}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const openGoogleMaps = () => {
        const {routes} = newOrder.data;
        const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
        const latLng = `${routes[1].lat},${routes[1].lng}`;
        const url = Platform.select({
            ios: `${scheme}@${latLng}`,
            android: `${scheme}${latLng}`
        });

        Linking.openURL(url as string).then();
    };

    const wait = () => {
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.user_id,
            orderId: data.id,
            orderStatus: newOrder.data.status === OrderStatus.WAITING ? OrderStatus.PROCESSING : OrderStatus.WAITING
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    const changeOrderStatus = () => {
        setIsLoading(true);
        const {data} = newOrder;
        ChangeOrderStatus({
            driver_id: data.driver.user_id,
            orderId: data.id,
            orderStatus: OrderStatus.DONE,
            waiting_time: waiting.time > 180 ? waiting.time - 180 : 0
        }, () => {
            setIsLoading(false)
        }, () => {
            setIsLoading(false)
        })
    };

    const goToChat = () => {
        navigation.navigate(SCREENS.CHAT)
    };

    return (
        <CurrentTripPanelView
            goToChat={goToChat}
            changeOrderStatus={changeOrderStatus}
            drivingTo={newOrder.data.routes[1] ? newOrder.data.routes[1].address : 'Не указано'}
            isVisible={newOrder.data.routes[1]}
            isLoading={isLoading}
            isWaiting={newOrder.data.status === OrderStatus.WAITING}
            duration={destination.details.duration}
            distance={destination.details.distance}
            openGoogleMaps={openGoogleMaps}
            wait={wait}
        />
    );
};

export default CurrentTripPanelController;
