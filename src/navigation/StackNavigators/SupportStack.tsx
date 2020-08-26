import React from 'react';
import {
    createStackNavigator,
} from "@react-navigation/stack";

import SCREENS from "@constants/screens";
import {SupportScreen, SupportCategoryScreen} from "../../screens/Profile";
import Header from "@components/navigation/Header";
import {colors, strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const SupportStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: colors.grey}
        }}
    >
        <Screen
            name={SCREENS.SUPPORT}
            component={SupportScreen}
            options={{
                header: () => <Header
                    title={strings.supportService}
                />
            }}
        />
        <Screen
            name={SCREENS.SUPPORT_CATEGORY}
            component={SupportCategoryScreen}
            options={{
                header: () => <Header
                    title={strings.earnings}
                />
            }}
        />
    </Navigator>
);

export default SupportStack;
