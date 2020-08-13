import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from "@react-navigation/stack";


import SCREENS from "@constants/screens";
import MapScreen from "../../screens/Map/MainScreen";
import ChatScreen from "../../screens/Map/ChatScreen";
import Header from "@components/navigation/Header";
import {strings} from "@constants/index";

const {Navigator, Screen} = createStackNavigator();

const MainStack = () => (
    <Navigator
        screenOptions={{
            cardStyle: {backgroundColor: '#fff'},
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
    >
        <Screen
            name={SCREENS.MAP}
            component={MapScreen}
            options={{
                headerShown: false
            }}
        />
        <Screen
            name={SCREENS.CHAT}
            component={ChatScreen}
            options={{
                header: () => <Header title={strings.message}/>
            }}
        />
    </Navigator>
);

export default MainStack;
