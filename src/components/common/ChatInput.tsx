import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from '../../assets/icons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import {deviceWidth, BORDER_RADIUS} from '@constants/values';
import constStyles from '../../constants/constStyles';

interface ChatInputProps {
    sendMsg: any;
    message: string;
    setMessage: (text: string) => void;
}

const ChatInput = ({sendMsg, message, setMessage}: ChatInputProps) => {
    return (
        <View style={[styles.container, constStyles.shadow]}>
            <TouchableOpacity onPress={() => console.log('frank')}>
                <Icon name="emojiSmile" size={20} color={colors.grayText}/>
            </TouchableOpacity>
            <TextInput
                multiline={true}
                underlineColorAndroid="transparent"
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                keyboardType={'twitter'}
            />
            <TouchableOpacity onPress={() => sendMsg()}>
                <Icon name="sendMessage" size={25} color={colors.blue}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: BORDER_RADIUS,
    },
    input: {
        paddingHorizontal: 10,
        padding: 0,
        width: deviceWidth * 0.7,
    },
});

export default ChatInput;
