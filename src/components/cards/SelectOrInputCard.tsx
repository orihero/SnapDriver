import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, LayoutAnimation} from 'react-native';
import Icon from '../../assets/icons';
import constStyles from '../../constants/constStyles';
import colors from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/values';

interface SelectOrInputCardProps {
    icon?: string;
    isPassword?: boolean;
    title: string;
    placeholder: string;
    setKeyboardOn?: any;
    secondaryIcon?: string;
    isSelect?: boolean;
    textColor?: string;
}

const SelectOrInputCard = ({
    title,
    isPassword,
    icon,
    placeholder,
    setKeyboardOn,
    secondaryIcon,
    isSelect,
    textColor,
}: SelectOrInputCardProps) => {
    let [showTitle, setShowTitle] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.contentWrapper,
                    constStyles.shadow,
                    !!secondaryIcon && {
                        justifyContent: 'space-between',
                    },
                ]}>
                {icon && <Icon name={icon} style={styles.icon} size={20} />}
                {!isSelect && (
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        numberOfLines={1}
                        secureTextEntry={isPassword}
                    />
                )}
                {!!isSelect && (
                    <Text
                        style={[
                            styles.input,
                            {paddingVertical: 5},
                            !!textColor && {
                                color: textColor,
                            },
                        ]}>
                        {placeholder}
                    </Text>
                )}
                {secondaryIcon && (
                    <Icon name={secondaryIcon} size={13} color={colors.black} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginBottom: 10,
    },
    contentWrapper: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        paddingBottom: 5,
        color: colors.darkGrayText,
        fontSize: 15,
    },
    icon: {
        paddingRight: 10,
    },
    input: {
        paddingLeft: 10,
        paddingVertical: 0,
        color: colors.darkGrayText,
    },
});

export default SelectOrInputCard;
