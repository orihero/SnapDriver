import React from 'react'
import DrawerContent from "@components/navigation/DrawerContent/DrawerContent";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {screens, IScreenProps} from "./screens";
import colors from "@constants/colors";
import SCREENS from "@constants/screens";

const {Navigator, Screen} = createDrawerNavigator();


const DrawerStack = () => (
    <Navigator
        drawerPosition={'left'}
        drawerStyle={{
            width: '90%'
        }}
        drawerContent={(props) => <DrawerContent  {...props}/>}
        initialRouteName={SCREENS.MAIN_STACK}
        sceneContainerStyle={{backgroundColor: colors.grey}}
    >
        {
            screens.map((screen: IScreenProps, index) => (
                    screen.component && <Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                    />
                )
            )
        }
    </Navigator>
);

export default DrawerStack;
