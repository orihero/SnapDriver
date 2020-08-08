import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";

import {
    AddDocumentsScreen,
    RegisterDriverScreen
} from "../../screens/Registration"

import SCREENS from "@constants/screens";
import Header from "@components/navigation/Header";
import {strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const RegisterDriverStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: '#fff'},
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode={"screen"}
    >
        <Screen
            name={SCREENS.REGISTER_DRIVER}
            component={RegisterDriverScreen}
            options={{
                header: ({navigation}) => (
                    <Header
                        title={strings.registerDriver}
                        navigation={navigation}
                    />
                ),
            }}
        />
    </Navigator>
);

export default RegisterDriverStack;
