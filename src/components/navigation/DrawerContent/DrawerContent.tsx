import React from 'react';
import {Text, View, Image, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from "./styles";
import images from '@assets/images';
import colors from '@constants/colors';
import constStyles from '@constants/constStyles';
import strings from '@constants/strings';
import Icon from '@assets/icons';
import DrawerItem from '../DrawerItem';
import {screens} from "../../../navigation/DraweNavigator/screens";
import TouchablePlatformSpecific from "@components/common/TouchablePlatformSpecific";


const DrawerContent = (props: any) => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.data);
    const phoneNumber = user.phone;

    const logout = () => {
        Alert.alert('Выйти из аккаунта', 'Вы уверены что хотите выйти из аакунта?', [
            {text: 'Отмена'},
            {text: 'Выйти', onPress: () => dispatch({type: 'LOGOUT'})}
        ])
    };

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity onPress={() => null}>
                    <View style={styles.avatarWithText}>
                        <View style={[styles.avatarWrapper, constStyles.shadow]}>
                            <Image
                                source={{uri: user.avatar}}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={styles.nameWrapper}>
                            <Text style={[styles.name, constStyles.medium]}>
                                {user.name}
                            </Text>
                            <Text style={[styles.number, constStyles.bold]}>
                                +{phoneNumber.slice(0, 3)} {phoneNumber.slice(3, 5)} {phoneNumber.slice(5, 8)} {phoneNumber.slice(8, 10)} {phoneNumber.slice(10, 12)}
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
                            {user.balance}{' '}
                        </Text>
                        <Text style={[styles.summCurrency, constStyles.light]}>
                            сум
                        </Text>
                    </View>
                    <View>
                        <Icon
                            name="curveDown"
                            size={9}
                            color={colors.blue}
                            style={{paddingBottom: 3}}
                        />
                        <Icon name="curveUp" size={9}/>
                    </View>
                </View>
            </View>
            <View style={styles.activity}>
                <View style={styles.iconWithText}>
                    <View style={[styles.iconWrapper, constStyles.shadow]}>
                        <Icon name="tick" color={colors.blue} size={15}/>
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
                        <Icon name="star" color={colors.blue} size={20}/>
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
                        <Icon name="multiply" color={colors.blue} size={30}/>
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
                    data={screens}
                    renderItem={({item}) => (
                        item.label &&
                        <DrawerItem
                            item={item}
                            {...props}
                        />
                    )}
                    keyExtractor={(item) => item.name}
                />
            </View>
            <TouchablePlatformSpecific onPress={logout}>
                <View
                    style={{
                        paddingTop: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View style={[styles.logoutWrapper, constStyles.shadow]}>
                        <AntDesign name="logout" size={25} color={colors.blue}/>
                    </View>
                </View>
            </TouchablePlatformSpecific>
        </View>
    );
};

export default DrawerContent;
