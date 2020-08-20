import React, {useEffect} from 'react';
import {Provider} from "react-redux";
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/lib/integration/react';

const PushNotification = require("react-native-push-notification");

import createStore from "./src/store/createStore";
import api from "./src/services/api";
import {Clipboard} from "react-native";

const {store, persistor} = createStore();

const App = () => {

    useEffect(() => {
        api.setToken(store);
    }, []);

    PushNotification.configure({
        onRegister: function (token) {
            console.log("TOKEN:", token);
            // Clipboard.setString(token);
        },
        soundName: 'default',
        onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
        },
        onAction: function (notification: any) {
            console.log("ACTION:", notification.action);
            console.log("NOTIFICATION:", notification);

        },
        onRegistrationError: function (err) {
            console.error(err.message, err);
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
