import React, {useEffect} from 'react';
import {View, StatusBar, FlatList, Text} from 'react-native';
import colors from '@constants/colors';
import styles from "./styles";


const NotificationsScreenView = ({notifications}: any) => {

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={({item}) => (
                    <View style={styles.messageItem}>
                        <Text style={styles.messageTitle}>{item.title}</Text>
                        <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default NotificationsScreenView;
