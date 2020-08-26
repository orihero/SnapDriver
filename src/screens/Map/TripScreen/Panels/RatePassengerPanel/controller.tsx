import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import RatePassengerPanelView from "./view";
import IAction from "@store/types/IAction";
import SCREENS from "@constants/screens";

interface IProps {
    RateOrder: IAction;
    SkipNewOrder: IAction;
    newOrder: any;
}

const RatePassengerPanelController = ({RateOrder, newOrder, SkipNewOrder}: IProps) => {

    const [isLoading, setIsLoading] = useState(false);


    const navigation = useNavigation();

    const [review, setReview] = useState('');
    const [rate, setRate] = useState(0);

    const rateOrder = () => {
        setIsLoading(true);
        RateOrder({
            orderId: newOrder.id,
            comment: review,
            rating: rate
        }, () => {
            setIsLoading(false);
            SkipNewOrder();
            navigation.navigate(SCREENS.MAP);
        })
    };

    return (
        <RatePassengerPanelView
            rateOrder={rateOrder}
            isLoading={isLoading}
            review={review}
            setReview={setReview}
            rate={rate}
            setRate={setRate}
        />

    );
};

export default RatePassengerPanelController;
