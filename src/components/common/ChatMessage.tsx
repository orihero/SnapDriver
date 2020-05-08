import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BORDER_RADIUS, BIG_BORDER_RADIUS} from '../../constants/values';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';

interface ChatMessageProps {
    item: {message: string; date: string; type: string};
}

const ChatMessage = ({item}: ChatMessageProps) => {
    return (
        <View
            style={[
                styles.container,
                item.type === 'send'
                    ? {
                          alignItems: 'flex-end',
                      }
                    : {
                          alignItems: 'flex-start',
                      },
            ]}>
            <View
                style={[
                    styles.buble,
                    item.type === 'send'
                        ? {
                              backgroundColor: colors.blue,
                              borderBottomRightRadius: 0,
                          }
                        : {
                              backgroundColor: colors.paleGray,
                              borderBottomLeftRadius: 0,
                          },
                    constStyles.medium,
                ]}>
                <Text
                    style={[
                        styles.message,
                        item.type === 'send'
                            ? {
                                  color: colors.white,
                              }
                            : {
                                  color: colors.black,
                              },
                        constStyles.medium,
                    ]}>
                    {item.message}
                </Text>
            </View>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buble: {
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: BIG_BORDER_RADIUS,
        width: 300,
        marginTop: 20,
    },
    message: {
        fontSize: 13,
    },
    date: {
        fontSize: 12,
    },
});

export default ChatMessage;
