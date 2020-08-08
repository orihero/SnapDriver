import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageSourcePropType,
} from 'react-native';
import constStyles from '@constants/constStyles';
import TouchablePlatformSpecific from '../common/TouchablePlatformSpecific';
import colors from '@constants/colors';

interface MessageCardProps {
    navigation?: any;
    image: ImageSourcePropType;
    title: string;
    onPress: any;
}

const MessageCard = ({navigation, image, title, onPress}: MessageCardProps) => {
    //functions

    return (
        <View style={styles.container}>
            <View style={[styles.touchableWrapper, constStyles.shadow]}>
                <TouchablePlatformSpecific onPress={onPress}>
                    <View style={styles.imageWrapper}>
                        <Image source={image} style={styles.image}/>
                    </View>
                </TouchablePlatformSpecific>
            </View>
            <Text style={[styles.title, constStyles.bold]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableWrapper: {
        overflow: 'hidden',
        borderRadius: 70,
    },
    imageWrapper: {
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
    },
    title: {
        paddingTop: 15,
        fontSize: 15,
    },
});

export default MessageCard;
