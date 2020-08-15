import React, {useEffect} from 'react';
import TripScreenView from "./view";
import {StackNavigationProp} from "@react-navigation/stack";

interface IProps {
    navigation: StackNavigationProp<any>
}

const TripScreenController = ({navigation}: IProps) => {

    useEffect(() => {

    }, []);

    return (
        <TripScreenView/>
    );
};

export default TripScreenController;
