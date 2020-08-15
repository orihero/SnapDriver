import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '@assets/icons';
import colors from '@constants/colors';
import constStyles from '../../constants/constStyles';
import {CONTAINER_PADDING} from '@constants/values';
import TouchablePlatformSpecific from "@components/common/TouchablePlatformSpecific";

interface InnerHeaderProps {
    topTitle: any;
    topData: string;
    bottomTitle: any;
    bottomData: string;
    icon?: string;
    number: string;
}

const InnerHeader = (
    {
        topData,
        topTitle,
        bottomData,
        bottomTitle,
        icon,
        number,
    }: InnerHeaderProps
) => {

    const onPress = () => {
        console.warn('pressed');
    };
    return (
        <View style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={styles.topWrapper}>
                    <Text style={[styles.topText, constStyles.bold]}>
                        {topTitle}:
                    </Text>
                    <Text style={[styles.topText, constStyles.bold]}>
                        {' '}
                        {topData}
                    </Text>
                </View>
                <View style={styles.bottomWrapper}>
                    {icon && (
                        <Icon name={icon} size={20} color={colors.black}/>
                    )}
                    <Text style={[styles.bottomText, constStyles.bold]}>
                        {bottomTitle}:
                    </Text>
                    <Text style={[styles.bottomText, constStyles.bold]}>
                        {' '}
                        {bottomData}
                    </Text>
                </View>
            </View>
            <View style={[styles.iconWrapper, constStyles.shadow]}>
                <TouchablePlatformSpecific onPress={onPress}>
                    <View style={styles.icon}>
                        <Icon name="phone" color={colors.blue} size={20}/>
                    </View>
                </TouchablePlatformSpecific>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: CONTAINER_PADDING,
    },
    dataWrapper: {},
    topWrapper: {
        flexDirection: 'row',
    },
    bottomWrapper: {
        flexDirection: 'row',
    },
    topText: {
        color: colors.black,
        fontSize: 17,
    },
    bottomText: {
        color: colors.blue,
        fontSize: 17,
    },
    iconWrapper: {
        borderRadius: 20,
        overflow: 'hidden',
    },
    icon: {
        padding: 10,
        backgroundColor: colors.white,
    },
});

export default InnerHeader;
