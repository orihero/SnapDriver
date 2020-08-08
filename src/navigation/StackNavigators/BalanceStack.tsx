import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {BalanceScreen} from "../../screens/Profile";
import Header from "@components/navigation/Header";
import {colors, strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const BalanceStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: colors.grey}
        }}
    >
        <Screen
            name={SCREENS.BALANCE}
            component={BalanceScreen}
            options={{
                header: () => <Header title={strings.balance}/>
            }}
        />
    </Navigator>
);

export default BalanceStack;
