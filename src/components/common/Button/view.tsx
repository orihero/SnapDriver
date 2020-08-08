import React from 'react';
import {View, Text, ActivityIndicator} from "react-native";


import styles from "./styles";
import TouchablePlatformSpecific from "../TouchablePlatformSpecific";

interface IProps {
    text?: string;
    containerStyle?: any;
    onPress: () => void,
    fontSize?: number;
    isLoading?: boolean;
    disabled?: boolean
}

const Button = (
    {
        text,
        containerStyle,
        onPress,
        fontSize,
        isLoading,
        disabled
    }: IProps) => {
    return (
        <View style={[styles.button, disabled && styles.disabled, containerStyle]}>
            <TouchablePlatformSpecific onPress={onPress} disabled={isLoading || disabled}>
                <View style={styles.wrapper}>
                    {
                        !isLoading
                            ? <Text
                                style={
                                    [
                                        styles.text,
                                        disabled && styles.disabledText,
                                        !fontSize && {fontSize}
                                    ]
                                }
                            >
                                {text}
                            </Text>
                            : <ActivityIndicator color={'#fff'} size={"large"}/>
                    }
                </View>
            </TouchablePlatformSpecific>
        </View>
    );
};

export default Button;
