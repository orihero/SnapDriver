import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BubleCutout from '@components/common/Buble';
import colors from '@constants/colors';
import constStyles from '@constants/constStyles';
import Icon from '@assets/icons';
import TouchablePlatformSpecific from '@components/common/TouchablePlatformSpecific';
import strings from '@constants/strings';
import HatCutout from '@components/common/HatCutout';
import Button from '@components/common/Button';
import styles from "./styles";

interface BalanceProps {
    navigation: any;
}

const BalanceScreenView = ({navigation}: BalanceProps) => {
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
            <View>
                <View style={[styles.topWrapper, constStyles.wideShadow]}>
                    <View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, constStyles.light]}>
                                {strings.myId}
                            </Text>
                            <Text style={[styles.text, constStyles.bold]}>
                                45868632
                            </Text>
                        </View>
                        <View style={styles.textWrapper}>
                            <Text style={[styles.text, constStyles.light]}>
                                {strings.registerDate}
                            </Text>
                            <Text style={[styles.text, constStyles.bold]}>
                                14.03.2020
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <TouchablePlatformSpecific onPress={onChatPress}>
                            <View style={styles.icon}>
                                <Icon
                                    name="chat"
                                    color={colors.blue}
                                    size={25}
                                />
                            </View>
                        </TouchablePlatformSpecific>
                    </View>
                    <BubleCutout style={styles.buble}/>
                </View>
                <View style={[styles.bottomWrapper, constStyles.wideShadow]}>
                    <HatCutout style={styles.cut}/>
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
            <View>
                <View>
                    <Text style={[styles.fillText, constStyles.medium]}>
                        {strings.fillBalanceText1}&nbsp;
                        <Text
                            onPress={onPaymePress}
                            style={[styles.fillTextButton, constStyles.bold]}
                        >
                            Payme&nbsp;
                        </Text>
                        {strings.fillBalanceText2}
                        <Text
                            onPress={onClickPress}
                            style={[styles.fillTextButton, constStyles.bold]}
                        >
                            &nbsp;Click
                        </Text>
                    </Text>
                </View>
                <Button
                    text={strings.fillBalance}
                    onPress={() => null}
                />
            </View>
        </View>
    );
};

export default BalanceScreenView;
