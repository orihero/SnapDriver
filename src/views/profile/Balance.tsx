import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import BubleCutout from '../../components/common/Buble';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';
import Icon from '../../assets/icons';
import Touchable from '../../components/common/Touchable';
import strings from '../../locales/strings';
import {
    deviceWidth,
    CONTAINER_PADDING,
    BORDER_RADIUS,
} from '../../constants/values';
import HatCutout from '../../components/common/HatCutout';
import RectangleButton from '../../components/common/RectangleButton';

interface BalanceProps {
    navigation: NavigationScreenProp<{}>;
}

const Balance = ({navigation}: BalanceProps) => {
    const onChatPress = () => {
        navigation.navigate('Chat');
    };
    const onPaymePress = () => {
        console.warn('Payme');
    };
    const onClickPress = () => {
        console.warn('Click');
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={[styles.topWrapper, constStyles.wideShadow]}>
                    <View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, constStyles.light]}>
                                {strings.myId}:
                            </Text>
                            <Text style={[styles.text, constStyles.bold]}>
                                {' '}
                                45868632
                            </Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, constStyles.light]}>
                                {strings.registerDate}:
                            </Text>
                            <Text style={[styles.text, constStyles.bold]}>
                                {' '}
                                14.03.2020
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <Touchable onPress={onChatPress}>
                            <View style={styles.icon}>
                                <Icon
                                    name="chat"
                                    color={colors.blue}
                                    size={25}
                                />
                            </View>
                        </Touchable>
                    </View>
                    <BubleCutout style={styles.buble} />
                </View>
                <View style={[styles.bottomWrapper, constStyles.wideShadow]}>
                    <HatCutout style={styles.cut} />
                    <View style={[styles.bar, styles.borderBottom]}>
                        <Text style={[styles.priceTitle, constStyles.bold]}>
                            {strings.currentBalance}
                        </Text>
                        <Text style={[styles.price, constStyles.bold]}>
                            585 000 сум
                        </Text>
                    </View>
                    <View style={[styles.bar, styles.borderBottom]}>
                        <Text style={[styles.priceTitle, constStyles.bold]}>
                            {strings.operatorCharge}
                        </Text>
                        <Text style={[styles.price, constStyles.bold]}>3%</Text>
                    </View>
                    <View style={styles.bar}>
                        <Text style={[styles.priceTitle, constStyles.bold]}>
                            {strings.dailyUsage}
                        </Text>
                        <Text style={[styles.price, constStyles.bold]}>
                            230 000 сум
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.click}>
                    <Text style={[styles.fillText, constStyles.medium]}>
                        {strings.fillBalanceText1}
                        <Text
                            onPress={onPaymePress}
                            style={[styles.fillTextButton, constStyles.bold]}>
                            {' '}
                            Payme{' '}
                        </Text>
                        {strings.fillBalanceText2}
                        <Text
                            onPress={onClickPress}
                            style={[styles.fillTextButton, constStyles.bold]}>
                            {' '}
                            Click{' '}
                        </Text>
                    </Text>
                </View>
                <RectangleButton
                    text={strings.fillBalance}
                    textColor={colors.black}
                    backColor={colors.orange}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: CONTAINER_PADDING,
        justifyContent: 'space-between',
    },
    topWrapper: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        padding: 20,
        marginBottom: 20,
    },
    textWrapper: {
        flexDirection: 'row',
    },
    buble: {
        position: 'absolute',
        bottom: -14,
        left: (deviceWidth - 63 - 30) / 2,
    },

    text: {fontSize: 15},
    iconWrapper: {
        borderRadius: 70,
        overflow: 'hidden',
    },
    icon: {
        height: 45,
        width: 45,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cut: {
        position: 'absolute',
        top: -15,
        height: 15,
        width: deviceWidth - 30,
    },
    bottomWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: colors.white,
        borderBottomRightRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.paleGray,
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
    priceTitle: {
        fontSize: 13,
    },
    price: {
        fontSize: 13,
        color: colors.blue,
    },
    fillText: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 14,
    },
    fillTextButton: {
        fontSize: 16,
        color: colors.blue,
    },
});

export default Balance;
