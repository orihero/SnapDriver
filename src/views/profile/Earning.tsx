import React, {useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    SafeAreaView,
    StatusBar,
} from 'react-native';
import strings from '../../locales/strings';
import Header from '../../components/navigation/Header';
import {NavigationScreenProp} from 'react-navigation';
import HeaderTab from '../../components/navigation/HeaderTab';
import {
    CONTAINER_PADDING,
    deviceWidth,
    BORDER_RADIUS,
} from '../../constants/values';
import colors from '../../constants/colors';
import BubleCutout from '../../components/common/Buble';
import Touchable from '../../components/common/Touchable';
import HatCutout from '../../components/common/HatCutout';
import constStyles from '../../constants/constStyles';
import Icon from '../../assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import ChooseCard from '../../components/cards/ChooseCard';

interface EarningProps {
    navigation: NavigationScreenProp<{}>;
}

const Earning = ({navigation}: EarningProps) => {
    //functions
    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, [navigation]);

    return (
        <View style={styles.plane}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <Header
                    navigation={navigation}
                    backArrow
                    backColor={colors.blue}
                    title={strings.myOrders}
                    childBgColor={colors.blue}>
                    <View style={styles.tabWrapper}>
                        <HeaderTab />
                    </View>
                </Header>
                <View style={styles.container}>
                    <View style={[styles.topWrapper, constStyles.wideShadow]}>
                        <Text style={[styles.tabName, constStyles.bold]}>
                            {strings.inDay}
                        </Text>
                        <View style={styles.earningWrapper}>
                            <Text
                                style={[styles.earningPrice, constStyles.bold]}>
                                234 500
                            </Text>
                            <Text
                                style={[
                                    styles.earningCurrency,
                                    constStyles.medium,
                                ]}>
                                сум
                            </Text>
                        </View>
                        <BubleCutout style={styles.buble} />
                    </View>
                    <View
                        style={[styles.bottomWrapper, constStyles.wideShadow]}>
                        <HatCutout style={styles.cut} />
                        <FlatList
                            columnWrapperStyle={styles.barWrapper}
                            numColumns={2}
                            data={[
                                {id: '0', name: strings.ride, data: 34},
                                {id: '1', name: strings.cancels, data: 34},
                                {id: '2', name: strings.skipped, data: 34},
                                {
                                    id: '3',
                                    name: strings.duration,
                                    data: '6ч  15 мин',
                                },
                            ]}
                            renderItem={({item}) => (
                                <View style={styles.bar}>
                                    <Text
                                        style={[
                                            styles.barTitle,
                                            constStyles.light,
                                        ]}>
                                        {item.name}:
                                    </Text>
                                    <Text
                                        style={[
                                            styles.barData,
                                            constStyles.bold,
                                        ]}>
                                        {item.data}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={[styles.card, constStyles.wideShadow]}>
                        <View style={[styles.row, styles.borderBottom]}>
                            <View style={styles.rowLeft}>
                                <Text
                                    style={[styles.rowTitle, constStyles.bold]}>
                                    {strings.balance}:{' '}
                                </Text>
                                <Text
                                    style={[styles.rowPrice, constStyles.bold]}>
                                    350 200{' '}
                                </Text>
                                <Text
                                    style={[
                                        styles.rowPrice,
                                        constStyles.light,
                                    ]}>
                                    сум
                                </Text>
                            </View>
                            <View style={styles.rowRight}>
                                <Icon
                                    name="curveDown"
                                    size={9}
                                    color={colors.blue}
                                    style={{paddingBottom: 3}}
                                />
                                <Icon name="curveUp" size={9} />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.rowLeft}>
                                <Text
                                    style={[styles.rowTitle, constStyles.bold]}>
                                    {strings.bet}:
                                </Text>
                            </View>
                            <View style={styles.rowRight}>
                                <Text
                                    style={[styles.rowPrice, constStyles.bold]}>
                                    15%
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.row,
                            styles.wrapper,
                            styles.borderBottom,
                        ]}>
                        <Text style={[styles.rowTitle, constStyles.bold]}>
                            {strings.earningInWeek}
                        </Text>
                        <View style={styles.rowLeft}>
                            <Text style={[styles.rowPrice, constStyles.bold]}>
                                234 500{' '}
                            </Text>
                            <Text style={[styles.rowPrice, constStyles.light]}>
                                сум
                            </Text>
                        </View>
                    </View>
                    <ChooseCard />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    plane: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        // backgroundColor: colors.white,
        // paddingHorizontal: CONTAINER_PADDING,
        padding: CONTAINER_PADDING,
    },
    tabWrapper: {
        paddingHorizontal: CONTAINER_PADDING,
        paddingVertical: 5,
    },
    topWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        padding: 20,
        paddingVertical: 10,
        marginBottom: 20,
    },
    tabName: {
        fontSize: 14,
    },
    earningWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    earningPrice: {
        color: colors.blue,
        fontSize: 25,
    },
    earningCurrency: {
        color: colors.blue,
        paddingLeft: 10,
        fontSize: 21,
    },
    textWrapper: {
        flexDirection: 'row',
    },
    buble: {
        position: 'absolute',
        bottom: -14,
        left: (deviceWidth - 63 - 30) / 2,
    },

    text: {fontSize: 15},
    iconWrapper: {
        borderRadius: 70,
        overflow: 'hidden',
    },
    icon: {
        height: 45,
        width: 45,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cut: {
        position: 'absolute',
        top: -15,
        height: 15,
        width: deviceWidth - 30,
    },
    bottomWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: colors.white,
        borderBottomRightRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    borderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.paleGray,
    },
    barWrapper: {
        justifyContent: 'space-between',
    },
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    barTitle: {
        fontSize: 14,
        color: colors.darkGrayText,
        paddingRight: 10,
    },
    barData: {fontSize: 15},
    card: {
        padding: CONTAINER_PADDING,
        paddingVertical: 5,
        marginTop: 15,
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowTitle: {
        fontSize: 14,
    },
    rowPrice: {
        fontSize: 18,
        color: colors.blue,
    },
    wrapper: {
        marginTop: 40,
        marginBottom: 20,
    },
});

export default Earning;
