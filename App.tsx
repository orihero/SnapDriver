import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/lib/integration/react';
import NetInfo from "@react-native-community/netinfo";

const PushNotification = require("react-native-push-notification");

import createStore from "./src/store/createStore";
import api from "./src/services/api";

const {store, persistor} = createStore();

const App = () => {

    useEffect(() => {
        api.setToken(store);
    }, []);

    PushNotification.configure({
        onRegister: (token: string) => {
            console.log("TOKEN:", token);
        },
        onNotification: (notification) => {
            console.log("NOTIFICATION:", notification);
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
    });

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
};

export default App;
