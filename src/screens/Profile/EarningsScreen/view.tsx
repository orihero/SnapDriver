import React, {useEffect} from 'react';
import {
    Text,
    View,
    ScrollView,
    StatusBar,
} from 'react-native';
import strings from '@constants/strings';
import HeaderTab from '@components/navigation/HeaderTab';
import colors from '@constants/colors';
import BubleCutout from '@components/common/Buble';
import HatCutout from '@components/common/HatCutout';
import constStyles from '@constants/constStyles';
import Icon from '@assets/icons';
import {FlatList} from 'react-native-gesture-handler';
import ChooseCard from '@components/cards/ChooseCard';
import styles from "./styles";


const EarningsScreenView = () => {

    useEffect(() => {
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor(colors.blue);
    }, []);

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.tabWrapper}>
                <HeaderTab/>
            </View>
            <View style={styles.container}>
                <View style={[styles.topWrapper, constStyles.wideShadow]}>
                    <Text style={[styles.tabName, constStyles.bold]}>
                        {strings.inDay}
                    </Text>
                    <View style={styles.earningWrapper}>
                        <Text style={[styles.earningPrice, constStyles.bold]}>234 500</Text>
                        <Text style={[styles.earningCurrency, constStyles.medium]}>сум</Text>
                    </View>
                    <BubleCutout style={styles.buble}/>
                </View>
                <View style={[styles.bottomWrapper, constStyles.wideShadow]}>
                    <HatCutout style={styles.cut}/>
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
                    <View style={styles.row}>
                        <View style={styles.rowLeft}>
                            <Text
                                style={[styles.rowTitle, constStyles.bold]}>
                                {strings.bet}:
                            </Text>
                        </View>
                        <View>
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
                <ChooseCard/>
            </View>
        </ScrollView>
    );
};

export default EarningsScreenView;
