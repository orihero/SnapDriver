import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, Keyboard} from 'react-native';
import Icon from '../../assets/icons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../constants/colors';
import {deviceWidth, BORDER_RADIUS} from '../../constants/values';
import constStyles from '../../constants/constStyles';

interface ChatInputProps {
    setMessage: any;
    messages: [];
}

const ChatInput = ({setMessage, messages}: ChatInputProps) => {
    //functions
    const onTextChange = (value) => {
        setInput(value);
    };

    const onSubmitMessage = () => {
        if (!!input) {
            setMessage([
                ...messages,
                {type: 'send', date: '10:15', message: input},
            ]);
        }
        setInput('');
    };
    const keyboardOn = useRef(null);

    const onEmojiPress = () => {
        keyboardOn.current.focus();
    };
    //variables
    let [input, setInput] = useState('');

    return (
        <View style={[styles.container, constStyles.shadow]}>
            <TouchableOpacity onPress={onEmojiPress}>
                <Icon name="emojiSmile" size={20} color={colors.grayText} />
            </TouchableOpacity>
            <TextInput
                ref={keyboardOn}
                multiline={true}
                underlineColorAndroid="transparent"
                style={styles.input}
                value={input}
                keyboardType={'twitter'}
                onChangeText={(value) => {
                    onTextChange(value);
                }}
            />
            <TouchableOpacity onPress={onSubmitMessage}>
                <Icon name="sendMessage" size={25} color={colors.blue} />
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
