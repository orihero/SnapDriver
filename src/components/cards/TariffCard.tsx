import React from 'react';
import {StyleSheet, Text, View, LayoutAnimation} from 'react-native';
import constStyles from '../../constants/constStyles';
import colors from '../../constants/colors';
import {BORDER_RADIUS} from '../../constants/values';
import Touchable from '../common/Touchable';

interface TariffCardProps {
    name: string;
    backColor?: string;
    textColor?: string;
    minPrice: number;
    setShowTariff: any;
}

const TariffCard = ({
    name,
    minPrice,
    backColor,
    textColor,
    setShowTariff,
}: TariffCardProps) => {
    //functions
    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowTariff(false);
    };

    return (
        <View style={styles.plane}>
            <Touchable onPress={onPress}>
                <View
                    style={[
                        styles.container,
                        !!backColor && {backgroundColor: backColor},
                    ]}>
                    <Text
                        style={[
                            styles.name,
                            constStyles.bold,
                            !!textColor && {
                                color: textColor,
                            },
                        ]}>
                        {name}
                    </Text>
                    <View style={[styles.priceWrapper]}>
                        <Text
                            style={[
                                styles.price,
                                constStyles.bold,
                                !!textColor && {
                                    color: textColor,
                                },
                            ]}>
                            {minPrice}
                        </Text>
                        <Text
                            style={[
                                styles.currency,
                                constStyles.light,
                                !!textColor && {
                                    color: textColor,
                                },
                            ]}>
                            {' '}
                            сум
                        </Text>
                    </View>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    plane: {
        borderRadius: 15,
        marginBottom: 10,
        overflow: 'hidden',
        width: 140,
    },
    container: {
        paddingHorizontal: 7,
        paddingVertical: 10,
        backgroundColor: colors.paleGray,
        alignItems: 'flex-end',
    },
    name: {fontSize: 14},
    priceWrapper: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 18,
    },
    currency: {fontSize: 18},
});

export default TariffCard;
