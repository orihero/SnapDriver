import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/values';
import Icon from '../../assets/icons';
import constStyles from '../../constants/constStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface AttachmentCardProps {
    title: string;
    name: string;
    icon?: string;
    customIcon?: string;
    textColor: string;
    onPress: any;
    done?: boolean;
}

const AttachmentCard = ({
    title,
    name,
    icon,
    textColor,
    customIcon,
    onPress,
    done,
}: AttachmentCardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View
                style={[
                    styles.contentWrapper,
                    constStyles.shadow,
                    !!done && {
                        borderBottomWidth: 2,
                        borderBottomColor: colors.blue,
                    },
                ]}>
                <Text
                    style={[
                        styles.name,
                        constStyles.semibold,
                        !!done && {
                            color: colors.blue,
                        },
                        !!textColor && {
                            color: textColor,
                        },
                    ]}>
                    {name}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.icon}>
                        <Icon
                            name={done ? 'tick' : icon}
                            size={done ? 15 : 25}
                            color={!done ? textColor : colors.blue}
                        />
                    </View>
                </TouchableOpacity>
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
