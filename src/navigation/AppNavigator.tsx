import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import {connect} from "react-redux";
import AuthenticationStack from "./StackNavigators/AuthenticationStack";
import RegisterDriverStack from "./StackNavigators/RegisterDriverStack";
import SCREENS from "@constants/screens";
import DrawerStack from "./DraweNavigator/DrawerStack";

const {Navigator, Screen} = createStackNavigator();

interface IProps {
    user: any
}

const AppNavigator = ({user}: IProps) => (
    <NavigationContainer>
        {
            !user.isAuthenticated ?
                <Navigator
                    headerMode={"none"}
                    screenOptions={{
                        cardStyle: {backgroundColor: '#fff'},
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    }}
                >
                    <Screen name={SCREENS.AUTHENTICATION_STACK} component={AuthenticationStack}/>
                    <Screen name={SCREENS.REGISTER_DRIVER_STACK} component={RegisterDriverStack}/>
                </Navigator>
                : <DrawerStack/>
        }
    </NavigationContainer>
);

const mapStateToProps = ({user}: IProps) => ({
    user
});

export default connect(mapStateToProps)(AppNavigator)

// import React from 'react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createDrawerNavigator} from 'react-navigation-drawer';
// import {
//     AddCar,
//     View,
//     EnterCode,
//     View,
//     View,
//     View,
//     Map,
//     Passanger,
//     Chat,
//     View,
//     Settings,
//     View,
//     View,
//     View,
// } from '../views';
// import Header from '@components/navigation/Header';
// import DrawerContent from '@components/navigation/DrawerContent';
// import {deviceWidth} from '@constants/values';
// import colors from '@constants/colors';
// import strings from '@constants/strings';
//
// let AuthStack = createStackNavigator(
//     {
//         EnterCode: {
//             screen: EnterCode,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         bigPoster
//                         backColor={colors.blue}
//                     />
//                 ),
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.registerDriver}
//                     />
//                 ),
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.driversDocuments}
//                     />
//                 ),
//             },
//         },
//         AddCar: {
//             screen: AddCar,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.addCar}
//                     />
//                 ),
//             },
//         },
//     },
//     {
//         // initialRouteName: 'View',
//     },
// );
//
// let MapStack = createStackNavigator(
//     {
//         View: {
//             screen: View,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },
//         Passanger: {
//             screen: Passanger,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },
//         Chat: {
//             screen: Chat,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.chatWithDriver}
//                     />
//                 ),
//             },
//         },
//         Map: {
//             screen: Map,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.myProfile}
//                     />
//                 ),
//             },
//         },
//         Settings: {
//             screen: Settings,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.settings}
//                     />
//                 ),
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 header: ({navigation}) => (
//                     <Header
//                         navigation={navigation}
//                         backArrow
//                         backColor={colors.blue}
//                         title={strings.balance}
//                     />
//                 ),
//             },
//         },
//         View: {
//             screen: View,
//             navigationOptions: {
//                 headerShown: false,
//             },
//         },
//     },
//     {
//         // initialRouteName: 'View',
//     },
// );
//
// let Drawer = createDrawerNavigator(
//     {
//         // AuthStack,
//         MapStack,
//     },
//     {
//         // drawerType: 'slide',
//         drawerWidth: deviceWidth * 0.9,
//         contentComponent: DrawerContent,
//     },
// );
//
// let Switch = createSwitchNavigator({
//     View,
//     AuthStack,
//     Drawer,
// });
