import React, {useEffect, ReactNode} from 'react';
import {Provider} from "react-redux";
import AppNavigator from './src/navigation/AppNavigator';
import {PersistGate} from 'redux-persist/lib/integration/react';
import io from "socket.io-client"
import Echo from "laravel-echo";

import createStore from "./src/store/createStore";
import api from "./src/services/api";

const {store, persistor} = createStore();

const App = () => {

    useEffect(() => {
        api.setToken(store);

        const echo = new Echo({
            host: 'http://snap.vroom.uz:6060',
            broadcaster: 'socket.io',
            client: io,
        });

        echo
            .channel('snaptaxi_database_car.105')
            .listen('.SearchEvent', (e) => {
                console.log(e);
            });

    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigator/>
            </PersistGate>
        </Provider>
    )
};

export default App;
