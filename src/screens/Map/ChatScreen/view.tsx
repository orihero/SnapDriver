import React, {useEffect, useState, useRef} from 'react';
import {View, StatusBar} from 'react-native';
import colors from '@constants/colors';
import ChatInput from '@components/common/ChatInput';
import {FlatList} from 'react-native-gesture-handler';
import ChatMessage from '@components/common/ChatMessage';
import styles from "./styles";


const ChatScreenView = () => {
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
    }, []);

    let flatList = useRef(null);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatList}
                onContentSizeChange={() =>
                    flatList.current.scrollToEnd({animated: true})
                }
                onLayout={() => flatList.current.scrollToEnd({animated: true})}
                contentContainerStyle={styles.chatArea}
                data={messagesList}
                renderItem={({item}) => <ChatMessage item={item}/>}
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

export default ChatScreenView;
