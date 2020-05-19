import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageSourcePropType,
    ProgressViewIOSComponent,
} from 'react-native';
import {BORDER_RADIUS, deviceHeight, deviceWidth} from '../../constants/values';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';

interface ImageCardProps {
    item: {
        photo: ImageSourcePropType;
        title: string;
    };
}

const ImageCard = ({item}: ImageCardProps) => {
    return (
        <>
            {!!item.photo && (
                <View style={styles.plane}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={[styles.contianer, constStyles.shadow]}>
                        <Image source={item.photo} style={styles.image} />
                    </View>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    plane: {},
    title: {
        fontSize: 15,
        color: colors.grayText,
        paddingBottom: 10,
    },
    contianer: {
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
        overflow: 'hidden',
        paddingHorizontal: 10,
    },
    image: {
        height: 150,
        width: deviceWidth / 2 - 60,
        resizeMode: 'contain',
    },
});

export default ImageCard;
