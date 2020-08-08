import React from "react";
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    TouchableOpacityProps, TouchableNativeFeedbackProps
} from "react-native";

interface IProps extends TouchableOpacityProps, TouchableNativeFeedbackProps {
    children: any
}

const TouchablePlatformSpecific = (
    {
        onPress,
        children,
        ...restProps
    }: IProps) => {
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback
                {...restProps}
                onPress={onPress}
            >
                {children}
            </TouchableNativeFeedback>
        )
    } else {
        return (
            <TouchableOpacity onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
};

export default TouchablePlatformSpecific
