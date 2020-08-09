import React from 'react';
import {createStackNavigator,} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {OrdersScreen} from "../../screens/Profile";
import {colors, strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const OrdersStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: colors.grey}
        }}
    >
        <Screen
            name={SCREENS.ORDERS}
            component={OrdersScreen}
            options={{
                headerShown: false
            }}
        />
    </Navigator>
);

export default OrdersStack;
