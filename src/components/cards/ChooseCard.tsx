import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';
import strings from '../../locales/strings';
import {BORDER_RADIUS, CONTAINER_PADDING} from '../../constants/values';
import Icon from '../../assets/icons';

interface ChooseCardProps {}

const ChooseCard = () => {
    return (
        <View style={[styles.container, constStyles.wideShadow]}>
            <View style={styles.rowLeft}>
                <Icon name="card" color={colors.blue} size={20} />
                <Text style={[styles.rowTitle, constStyles.bold]}>
                    {strings.myCard}
                </Text>
            </View>
            <Icon name="angleRight" color={colors.grayText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        paddingHorizontal: CONTAINER_PADDING,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowTitle: {
        color: colors.blue,
        paddingLeft: 10,
    },
});

export default ChooseCard;
