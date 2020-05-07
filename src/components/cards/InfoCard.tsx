import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import constStyles from '../../constants/constStyles';
import {BORDER_RADIUS} from '../../constants/values';
import colors from '../../constants/colors';

interface InfoCardProps {
    message: string;
}

const InfoCard = ({message}: InfoCardProps) => {
    return (
        <View style={[styles.container, constStyles.shadow]}>
            <Text style={[styles.message, constStyles.light]}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: 13,
        paddingVertical: 15,
    },
});

export default InfoCard;
