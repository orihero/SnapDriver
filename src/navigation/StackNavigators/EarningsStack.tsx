import React from 'react';
import {
    createStackNavigator,
} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {EarningsScreen} from "../../screens/Profile";
import Header from "@components/navigation/Header";
import {colors, strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const EarningsStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: colors.grey}
        }}
    >
        <Screen
            name={SCREENS.EARNINGS}
            component={EarningsScreen}
            options={{
                header: () => <Header
                    title={strings.earnings}
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

export default EarningsStack;
