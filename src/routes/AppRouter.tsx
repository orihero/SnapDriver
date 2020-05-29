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
    Chat,
    Profile,
    Settings,
    Orders,
    Earning,
    Balance,
} from '../views';
import Header from '../components/navigation/Header';
import DrawerContent from '../components/navigation/DrawerContent';
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
        // initialRouteName: 'AddDocuments',
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
        Chat: {
            screen: Chat,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.chatWithDriver}
                    />
                ),
            },
        },
        Map: {
            screen: Map,
            navigationOptions: {
                headerShown: false,
            },
        },
        Orders: {
            screen: Orders,
            navigationOptions: {
                headerShown: false,
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.myProfile}
                    />
                ),
            },
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.settings}
                    />
                ),
            },
        },
        Balance: {
            screen: Balance,
            navigationOptions: {
                header: ({navigation}) => (
                    <Header
                        navigation={navigation}
                        backArrow
                        backColor={colors.blue}
                        title={strings.balance}
                    />
                ),
            },
        },
        Earning: {
            screen: Earning,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        // initialRouteName: 'Earning',
    },
);

let Drawer = createDrawerNavigator(
    {
        // AuthStack,
        MapStack,
    },
    {
        // drawerType: 'slide',
        drawerWidth: deviceWidth * 0.9,
        contentComponent: DrawerContent,
    },
);

let Switch = createSwitchNavigator({
    LanguageSelect,
    AuthStack,
    Drawer,
});

let App = createAppContainer(Switch);

export default App;
