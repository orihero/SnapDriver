import React, {useEffect, useRef} from 'react';
import {View, StatusBar} from 'react-native';
import colors from '@constants/colors';
import ChatInput from '@components/common/ChatInput';
import {FlatList} from 'react-native-gesture-handler';
import ChatMessage from '@components/common/ChatMessage';
import styles from "./styles";


const ChatScreenView = ({sendMsg, setMessage,messages, message}: any) => {
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
                data={messages}
                renderItem={({item}) => <ChatMessage item={item}/>}
            />
            <View style={styles.inputWrapper}>
                <ChatInput
                    setMessage={setMessage}
                    message={message}
                    sendMsg={sendMsg}
                />
            </View>
        </View>
    );
};

export default ChatScreenView;
