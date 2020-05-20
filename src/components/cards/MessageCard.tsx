import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    StatusBar,
    Image,
    View,
    ImageSourcePropType,
} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import constStyles from '../../constants/constStyles';
import Touchable from '../common/Touchable';
import colors from '../../constants/colors';
import images from '../../assets/images';

interface MessageCardProps {
    navigation?: NavigationScreenProp<{}>;
    image: ImageSourcePropType;
    title: string;
    onPress: any;
}

const MessageCard = ({navigation, image, title, onPress}: MessageCardProps) => {
    //functions

    return (
        <View style={styles.container}>
            <View style={[styles.touchableWrapper, constStyles.shadow]}>
                <Touchable onPress={onPress}>
                    <View style={styles.imageWrapper}>
                        <Image source={image} style={styles.image} />
                    </View>
                </Touchable>
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
