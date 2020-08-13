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
