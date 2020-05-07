import React, {useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import AppNavigator from './src/routes/AppRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import colors from './src/constants/colors';

const App = () => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <SafeAreaProvider>
            {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
            <View style={{flex: 1}}>
                <AppNavigator />
            </View>
        </SafeAreaProvider>
    );
};

export default App;
