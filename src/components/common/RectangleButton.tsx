import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constStyles from '../../constants/constStyles';
import colors from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/values';
import Touchable from './Touchable';

interface RectangleButtonProps {
    onPress?: any;
    backColor: string;
    text?: string;
    textColor?: string;
    borderRadius?: number;
    invalid?: boolean;
    fontSize?: number;
    fontWeight?: any;
}

const RectangleButton = ({
    onPress,
    backColor,
    text,
    textColor,
    borderRadius,
    invalid,
    fontSize,
    fontWeight,
}: RectangleButtonProps) => {
    return (
        <View
            style={[
                {
                    overflow: 'hidden',
                    borderRadius: borderRadius ? borderRadius : BORDER_RADIUS,
                },
                constStyles.shadow,
            ]}>
            <Touchable
                onPress={
                    invalid
                        ? () => {
                              console.warn('invalid');
                          }
                        : onPress
                }>
                <View
                    style={[
                        constStyles.shadow,
                        styles.container,
                        !!backColor && {
                            backgroundColor: invalid
                                ? colors.superPaleGray
                                : backColor,
                        },
                    ]}>
                    <Text
                        style={[
                            styles.text,
                            fontWeight ? fontWeight : constStyles.medium,
                            !!textColor && {
                                color: invalid ? colors.white : textColor,
                            },
                            !!fontSize && {
                                fontSize: fontSize,
                            },
                        ]}>
                        {text}
                    </Text>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.paleGray,
        padding: 15,
        alignItems: 'center',
    },
    text: {
        color: colors.paleGray,
        fontSize: 14,
    },
});

export default RectangleButton;
