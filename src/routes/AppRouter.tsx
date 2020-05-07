import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
    AddCar,
    AddDocuments,
    EnterCode,
    LanguageSelect,
    RegisterDriver,
    MapPage,
    Map,
    Passanger,
} from '../views';
import Header from '../components/navigation/Header';
import {deviceWidth} from '../constants/values';
import colors from '../constants/colors';
import strings from '../locales/strings';

let AuthStack = createStackNavigator(
    {
        EnterCode: {
            screen: EnterCode,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        bigPoster
                        backColor={colors.blue}
                    />
                ),
            },
        },
        RegisterDriver: {
            screen: RegisterDriver,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.registerDriver}
                    />
                ),
            },
        },
        AddDocuments: {
            screen: AddDocuments,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.driversDocuments}
                    />
                ),
            },
        },
        AddCar: {
            screen: AddCar,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.addCar}
                    />
                ),
            },
        },
    },
    {
        // initialRouteName: 'AddCar',
    },
);

let MapStack = createStackNavigator(
    {
        MapPage: {
            screen: MapPage,
            navigationOptions: {
                headerShown: false,
            },
        },
        Passanger: {
            screen: Passanger,
            navigationOptions: {
                headerShown: false,
            },
        },
        Map: {
            screen: Map,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        initialRouteName: 'Passanger',
    },
);

let Drawer = createDrawerNavigator(
    {
        // AuthStack,
        MapStack,
    },
    {
        // drawerType: 'slide',
        drawerWidth: deviceWidth * 0.8,
        // contentComponent: DrawerContent,
    },
);

let Switch = createSwitchNavigator({
    // LanguageSelect,
    // AuthStack,
    Drawer,
});

let App = createAppContainer(Switch);

export default App;
