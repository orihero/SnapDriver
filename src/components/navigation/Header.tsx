import React, {ReactNode, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Keyboard} from 'react-native';
import images from '../../assets/images';
import {BIG_BORDER_RADIUS, deviceHeight} from '../../constants/values';
import Icon from '../../assets/icons';
import colors from '../../constants/colors';
import constStyles from '../../constants/constStyles';
import LinearGradient from 'react-native-linear-gradient';
import {DrawerActions} from 'react-navigation-drawer';
import Touchable from '../common/Touchable';

interface HeaderProps {
    navigation?: any;
    bigPoster?: boolean;
    backArrow?: boolean;
    title?: string;
    backColor?: string;
    menu?: boolean;
    notification?: boolean;
    round?: boolean;
    innerHeader?: boolean;
    gradientBack?: any;
    titleColor?: string;
    children?: ReactNode;
}

const Header = ({
    navigation,
    bigPoster,
    backArrow,
    menu,
    backColor,
    innerHeader,
    title,
    gradientBack,
    titleColor,
    notification,
    round,
    children,
}: HeaderProps) => {
    //functions
    const onPress = () => {
        navigation.goBack();
    };

    const onMenuPress = () => {
        // navigation.toggleDrawer();
    };

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    //functions
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            },
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            },
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    let HeaderView = () => {
        return (
            <View
                style={[
                    styles.container,
                    !!backColor && {
                        backgroundColor: backColor,
                    },
                    !bigPoster && {
                        paddingVertical: 20,
                        paddingBottom: 30,
                    },
                    !gradientBack && constStyles.shadow,
                ]}>
                {bigPoster ? (
                    <View style={styles.posterWrapper}>
                        <Image
                            source={images.poster}
                            style={[
                                styles.posterImage,
                                isKeyboardVisible && {
                                    height: deviceHeight * 0.18,
                                },
                            ]}
                        />
                    </View>
                ) : (
                    <View style={styles.headerAndInnerHeader}>
                        <View style={styles.header}>
                            <View style={styles.titleWrapper}>
                                <Text
                                    style={[
                                        styles.title,
                                        constStyles.bold,
                                        !!titleColor && {
                                            color: titleColor,
                                        },
                                    ]}>
                                    {title}
                                </Text>
                            </View>
                            {!menu ? (
                                <View style={styles.iconWrapper}>
                                    <Touchable onPress={onPress}>
                                        <View
                                            style={{
                                                padding: 10,
                                                backgroundColor: colors.white,
                                            }}>
                                            <Icon name="arrowLeft" size={14} />
                                        </View>
                                    </Touchable>
                                </View>
                            ) : (
                                <View style={styles.iconWrapper}>
                                    <Touchable onPress={onMenuPress}>
                                        <View
                                            style={{
                                                padding: 10,
                                                backgroundColor: colors.white,
                                            }}>
                                            <Icon name="menu" size={14} />
                                            {notification && (
                                                <View style={styles.notifyIcon}>
                                                    <Icon
                                                        name="ellipse"
                                                        size={10}
                                                        color={colors.blue}
                                                    />
                                                </View>
                                            )}
                                        </View>
                                    </Touchable>
                                </View>
                            )}
                        </View>
                        {children && (
                            <View style={styles.childrenHeader}>
                                {children}
                            </View>
                        )}
                    </View>
                )}
            </View>
        );
    };

    return (
        <View
            style={[
                styles.plane,
                gradientBack && {
                    backgroundColor: colors.transparent,
                },
                round && {
                    backgroundColor: colors.transparent,
                },
            ]}>
            {!!gradientBack ? (
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[gradientBack[0] || '', gradientBack[1] || '']}>
                    <HeaderView />
                </LinearGradient>
            ) : (
                <HeaderView />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    plane: {
        backgroundColor: colors.white,
    },
    container: {
        borderBottomRightRadius: BIG_BORDER_RADIUS,
        borderBottomLeftRadius: BIG_BORDER_RADIUS,
        overflow: 'hidden',
    },
    posterWrapper: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    posterImage: {
        marginLeft: 20,
        width: 317,
        height: deviceHeight * 0.4,
        resizeMode: 'contain',
    },

    headerAndInnerHeader: {},
    childrenHeader: {
        backgroundColor: colors.white,
        marginBottom: -20,
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {},
    iconWrapper: {
        overflow: 'hidden',
        position: 'absolute',
        borderRadius: 20,
        left: 15,
    },
    title: {
        fontSize: 18,
        color: colors.white,
    },
    notifyIcon: {
        position: 'absolute',
        bottom: 5,
        right: 6,
    },
});

export default Header;
