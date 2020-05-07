import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/values';
import Icon from '../../assets/icons';
import constStyles from '../../constants/constStyles';

interface AttachmentCardProps {
    title: string;
    name: string;
    icon?: string;
    customIcon?: string;
    textColor: string;
}

const AttachmentCard = ({
    title,
    name,
    icon,
    textColor,
    customIcon,
}: AttachmentCardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.contentWrapper,
                    constStyles.shadow,
                    !!customIcon && {
                        borderBottomWidth: 2,
                        borderBottomColor: textColor,
                    },
                ]}>
                <Text
                    style={[
                        styles.name,
                        constStyles.semibold,
                        !!textColor && {
                            color: textColor,
                        },
                    ]}>
                    {name}
                </Text>
                <View style={styles.icon}>
                    <Icon
                        name={customIcon ? customIcon : icon}
                        size={customIcon ? 15 : 25}
                        color={textColor}
                    />
                </View>
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
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        paddingBottom: 5,
        color: colors.darkGrayText,
        fontSize: 15,
    },
    name: {
        fontSize: 14,
        color: colors.darkGrayText,
    },
    icon: {
        width: 30,
        alignItems: 'center',
    },
});

export default AttachmentCard;
