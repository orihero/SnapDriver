import React from 'react';
import {
    createStackNavigator,
} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {OrdersScreen} from "../../screens/Profile";
import Header from "@components/navigation/Header";
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
                header: () => <Header
                    title={strings.orders}
                    style={{
                        marginBottom: 0,
                        borderBottomEndRadius: 0,
                        borderBottomStartRadius: 0,
                    }}
                />
            }}
        />
    </Navigator>
);

export default OrdersStack;
