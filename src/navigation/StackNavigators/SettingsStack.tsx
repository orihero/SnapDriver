import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {SettingsScreen} from "../../screens/Profile";
import Header from "@components/navigation/Header";
import {colors, strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const SettingsStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: colors.grey}
        }}
    >
        <Screen
            name={SCREENS.SETTINGS}
            component={SettingsScreen}
            options={{
                header: () => <Header title={strings.settings}/>
            }}
        />
    </Navigator>
);

export default SettingsStack;
