import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from '../../assets/icons';
import images from '../../assets/images';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';
import ImagePicker from 'react-native-image-picker';

interface AvatarProps {
    style?: any;
}

const Avatar = ({style}: AvatarProps) => {
    const onAddPress = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
                setPhoto(response);
            }
        });
    };
    //variables
    let [photo, setPhoto] = useState(images.user);
    return (
        <View style={[styles.container, style]}>
            <View style={styles.imageWrapper}>
                <Image source={photo} style={styles.image} />
            </View>
            <View style={[styles.iconWrapper, constStyles.shadow]}>
                <TouchableOpacity onPress={onAddPress}>
                    <Icon name="plus" size={20} color={colors.darkGray} />
                </TouchableOpacity>
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
        overflow: 'hidden',
    },
    image: {
        height: 85,
        width: 85,
        resizeMode: 'cover',
    },
    iconWrapper: {
        position: 'absolute',
        top: 65,
        right: 0,
        height: 35,
        width: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
    },
});

export default Avatar;
