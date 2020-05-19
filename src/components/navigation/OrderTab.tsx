import React, {useState} from 'react';
import {StyleSheet, Text, View, LayoutAnimation} from 'react-native';
import colors from '../../constants/colors';
import strings from '../../locales/strings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import constStyles from '../../constants/constStyles';

interface OrderTabProps {}

const OrderTab = () => {
    let [activeTab, setActiveTab] = useState('day');
    //fonctions
    const onDayPress = () => {
        setActiveTab('day');
    };
    const onWeekPress = () => {
        setActiveTab('week');
    };
    const onMonthPress = () => {
        setActiveTab('month');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onDayPress}>
                <View
                    style={[
                        styles.item,
                        {
                            backgroundColor:
                                activeTab == 'day' ? colors.white : colors.blue,
                        },
                    ]}>
                    <Text
                        style={[
                            constStyles.semibold,
                            styles.text,
                            {
                                color:
                                    activeTab == 'day'
                                        ? colors.blue
                                        : colors.white,
                            },
                        ]}>
                        {strings.inDay}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onWeekPress}>
                <View
                    style={[
                        styles.item,
                        {
                            backgroundColor:
                                activeTab == 'week'
                                    ? colors.white
                                    : colors.blue,
                        },
                    ]}>
                    <Text
                        style={[
                            constStyles.semibold,
                            styles.text,
                            {
                                color:
                                    activeTab == 'week'
                                        ? colors.blue
                                        : colors.white,
                            },
                        ]}>
                        {strings.inWeek}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onMonthPress}>
                <View
                    style={[
                        styles.item,
                        {
                            backgroundColor:
                                activeTab == 'month'
                                    ? colors.white
                                    : colors.blue,
                        },
                    ]}>
                    <Text
                        style={[
                            constStyles.semibold,
                            styles.text,
                            {
                                color:
                                    activeTab == 'month'
                                        ? colors.blue
                                        : colors.white,
                            },
                        ]}>
                        {strings.inMonth}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 30,
        backgroundColor: colors.blue,
        borderColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    item: {
        padding: 6,
        paddingHorizontal: 15,
        borderRadius: 30,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    text: {
        fontSize: 14,
    },
});

export default OrderTab;
