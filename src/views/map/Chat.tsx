import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import colors from '../../constants/colors';
import ChatInput from '../../components/common/ChatInput';
import {CONTAINER_PADDING} from '../../constants/values';
import {FlatList} from 'react-native-gesture-handler';
import ChatMessage from '../../components/common/ChatMessage';

interface ChatProps {
    navigation: NavigationScreenProp<{}>;
}

const Chat = ({navigation}: ChatProps) => {
    let [messagesList, setMessageList] = useState([
        {
            id: '1',
            message:
                'this is me and this is message that you wanted, you happy?',
            date: '10:10',
            type: 'recieve',
        },
        {
            id: '2',
            message:
                'this is me and this is message that you wanted, you happy? I am asking?',
            date: '10:10',
            type: 'recieve',
        },
        {
            id: '3',
            message: 'yeah I am very very Happy 😀😀😀',
            date: '10:11',
            type: 'send',
        },
    ]);

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.chatArea}
                data={messagesList}
                renderItem={({item}) => <ChatMessage item={item} />}
                keyExtractor={(item) => item.id}
            />
            <View style={styles.inputWrapper}>
                <ChatInput
                    setMessage={setMessageList}
                    messages={messagesList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: colors.white,
    },
    chatArea: {
        paddingHorizontal: CONTAINER_PADDING,
    },
    inputWrapper: {
        padding: CONTAINER_PADDING,
    },
});

export default Chat;
