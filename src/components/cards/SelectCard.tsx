import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '@assets/icons';
import colors from '@constants/colors';
import constStyles from '@constants/constStyles';
import {BORDER_RADIUS} from '@constants/values';

interface SelectCardProps {
    name?: string;
    value?: string;
    values?: [];
}

const SelectCard = ({name, value, values}: SelectCardProps) => {
    return (
        <View style={[styles.container, constStyles.shadow]}>
            <Text style={[styles.name, constStyles.medium]}>{name}</Text>
            <View style={styles.selectWrapper}>
                <Text style={[styles.value, constStyles.bold]}>{value}</Text>
                <Icon name="angleRight" size={14} color={colors.black}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    name: {
        fontSize: 16,
    },
    selectWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value: {
        paddingRight: 10,
        fontSize: 15,
    },
});

export default SelectCard;
