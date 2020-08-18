import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from "./styles"
import Icon from '@assets/icons';
import colors from '@constants/colors';
import constStyles from '@constants/constStyles';
import LinearGradient from 'react-native-linear-gradient';
import TouchablePlatformSpecific from '../../common/TouchablePlatformSpecific';
import {DrawerNavigationProp} from "@react-navigation/drawer";

interface HeaderProps {
    title?: string;
    notification?: boolean;
    gradientBack?: any;
    children?: any
}

const MapHeader = (
    {
        title,
        gradientBack,
        notification,
        children,
    }: HeaderProps) => {

    const navigation: DrawerNavigationProp<any> = useNavigation();

    const onMenuPress = () => {
        navigation.toggleDrawer();
    };

    let HeaderView = () => {
        return (
            <View style={[styles.container, children && {
                backgroundColor: colors.grey,
                paddingBottom: 15,
                borderWidth: 2,
                borderColor: colors.white,
                borderTopWidth: 0,
                ...constStyles.shadow
            }]}
            >
                <View style={styles.headerAndInnerHeader}>
                    <View style={styles.header}>
                        <View style={styles.titleWrapper}>
                            <Text style={[styles.title, constStyles.bold]}>
                                {title}
                            </Text>
                        </View>
                        <View style={styles.iconWrapper}>
                            <TouchablePlatformSpecific onPress={onMenuPress}>
                                <View
                                    style={{
                                        padding: 10,
                                        backgroundColor: colors.white,
                                    }}>
                                    <Icon
                                        name="menu"
                                        color={colors.blue}
                                        size={14}
                                    />
                                    {notification && (
                                        <View style={styles.notifyIcon}>
                                            <Icon
                                                name="ellipse"
                                                size={10}
                                                color={colors.orange}
                                            />
                                        </View>
                                    )}
                                </View>
                            </TouchablePlatformSpecific>
                        </View>
                    </View>
                    {children}
                </View>
            </View>
        );
    };

    return (
        <>
            {!!gradientBack ? (
                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[gradientBack[0] || '', gradientBack[1] || '']}
                >
                    <View style={{height: 80, justifyContent: 'center'}}>
                        <HeaderView/>
                    </View>
                </LinearGradient>
            ) : (
                <HeaderView/>
            )}
        </>
    );
};


export default MapHeader;
