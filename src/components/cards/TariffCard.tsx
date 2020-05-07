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
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: colors.white,
    },
    name: {fontSize: 15},
    priceWrapper: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 20,
    },
    currency: {fontSize: 20},
});

export default TariffCard;
