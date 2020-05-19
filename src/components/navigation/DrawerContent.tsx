import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import images from '../../assets/images';
import colors from '../../constants/colors';
import {CONTAINER_PADDING} from '../../constants/values';
import constStyles from '../../constants/constStyles';
import strings from '../../locales/strings';
import Icon from '../../assets/icons';
import {NavigationScreenProp} from 'react-navigation';
import DrawerItem from './DrawerItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface DrawerContentProps {
    navigation: NavigationScreenProp<{}>;
}

const menuList = [
    {
        id: '1',
        name: strings.earnings,
        to: '',
    },
    {
        id: '2',
        name: strings.balance,
        to: 'Balance',
    },
    {
        id: '3',
        name: strings.orders,
        to: 'Orders',
    },
    {
        id: '4',
        name: strings.setting,
        to: 'Settings',
    },
    {
        id: '5',
        name: strings.supportService,
        to: '',
    },
];

const DrawerContent = ({navigation}: DrawerContentProps) => {
    //functions
    const onProfilePress = () => {
        navigation.navigate('Profile');
    };
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity onPress={onProfilePress}>
                    <View style={styles.avatarWithText}>
                        <View
                            style={[styles.avatarWrapper, constStyles.shadow]}>
                            <Image source={images.user} style={styles.avatar} />
                        </View>
                        <View style={styles.nameWrapper}>
                            <Text style={[styles.name, constStyles.medium]}>
                                Мирмахмудов Фарход
                            </Text>
                            <Text style={[styles.number, constStyles.bold]}>
                                +998 90 377 33 85
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.earningWrapper}>
                    <View style={styles.summWrapper}>
                        <Text style={[styles.summTitle, constStyles.bold]}>
                            {strings.sum}
                            {': '}
                        </Text>
                        <Text style={[styles.summNumber, constStyles.bold]}>
                            356 559{' '}
                        </Text>
                        <Text style={[styles.summCurrency, constStyles.light]}>
                            сум
                        </Text>
                    </View>
                    <View style={styles.twin}>
                        <Icon
                            name="curveDown"
                            size={9}
                            color={colors.blue}
                            style={{paddingBottom: 3}}
                        />
                        <Icon name="curveUp" size={9} />
                    </View>
                </View>
            </View>
            <View style={styles.activity}>
                <View style={styles.iconWithText}>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <Icon name="tick" color={colors.blue} size={15} />
                    </View>
                    <Text style={[styles.percentage, constStyles.bold]}>
                        95.5%
                    </Text>
                    <Text style={[styles.activityName, constStyles.light]}>
                        {strings.activeness}
                    </Text>
                </View>
                <View style={styles.iconWithText}>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <Icon name="star" color={colors.blue} size={20} />
                    </View>
                    <Text style={[styles.percentage, constStyles.bold]}>
                        4.5
                    </Text>
                    <Text style={[styles.activityName, constStyles.light]}>
                        {strings.rate}
                    </Text>
                </View>
                <View style={styles.iconWithText}>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <Icon name="multiply" color={colors.blue} size={30} />
                    </View>
                    <Text style={[styles.percentage, constStyles.bold]}>
                        3.2%
                    </Text>
                    <Text style={[styles.activityName, constStyles.light]}>
                        {strings.cancels}
                    </Text>
                </View>
            </View>
            <View style={styles.menuList}>
                <FlatList
                    data={menuList}
                    renderItem={({item}) => (
                        <DrawerItem item={item} navigation={navigation} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View
                style={{
                    paddingTop: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View style={[styles.logoutWrapper, constStyles.shadow]}>
                    <AntDesign name="logout" size={25} color={colors.blue} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: CONTAINER_PADDING,
    },
    profile: {
        paddingTop: 10,
    },
    avatarWithText: {
        paddingVertical: 10,
        borderBottomColor: colors.superPaleGray,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    avatarWrapper: {
        height: 70,
        width: 70,
        overflow: 'hidden',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: colors.paleGray,
    },
    avatar: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
    nameWrapper: {
        paddingLeft: 20,
    },
    name: {
        fontSize: 15,
    },
    number: {
        fontSize: 18,
    },
    earningWrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.superPaleGray,
    },
    summWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    summTitle: {
        fontSize: 14,
    },
    summCurrency: {
        fontSize: 18,
        color: colors.blue,
    },
    summNumber: {
        fontSize: 18,
        color: colors.blue,
    },
    activity: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    iconWithText: {
        alignItems: 'center',
    },
    iconWrapper: {
        marginBottom: 10,
        borderRadius: 30,
        backgroundColor: colors.white,
        height: 45,
        justifyContent: 'center',
        width: 45,
        alignItems: 'center',
    },
    percentage: {fontSize: 18},
    activityName: {
        fontSize: 14,
    },
    menuList: {
        marginTop: 10,
    },
    logoutWrapper: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DrawerContent;
