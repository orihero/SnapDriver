import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from '../../assets/icons';
import images from '../../assets/images';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';

interface AvatarProps {
    style?: any;
}

const Avatar = ({style}: AvatarProps) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.imageWrapper}>
                <Image source={images.user} style={styles.image} />
            </View>
            <View style={[styles.iconWrapper, constStyles.shadow]}>
                <Icon name="plus" size={20} color={colors.darkGray} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageWrapper: {
        borderColor: colors.darkTransparent,
        borderWidth: 5,
        borderRadius: 190,
        width: 95,
        height: 95,
    },
    image: {
        width: 85,
        flex: 1,
        borderRadius: 190,
        resizeMode: 'center',
    },
    iconWrapper: {
        position: 'absolute',
        top: 65,
        right: 0,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 20,
    },
});

export default Avatar;
