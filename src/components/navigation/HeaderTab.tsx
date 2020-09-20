import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import strings from '@constants/strings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import constStyles from '../../constants/constStyles';
import moment from "moment";


const HeaderTab = ({changePeriod}: any) => {
    let [activeTab, setActiveTab] = useState('day');

    const onDayPress = () => {
        setActiveTab('day');
        changePeriod(new Date())
    };

    const onWeekPress = () => {
        setActiveTab('week');
        let arr = moment(new Date()).format('YYYY-MM-DD').split('-');
        if (Number(arr[2]) - 7 >= 0) {
            changePeriod(`${arr[0]}-${arr[1]}-${Number(arr[2]) - 7}`)
        } else {
            changePeriod(`${arr[0]}-${arr[1]}-${0}`)
        }
    };

    const onMonthPress = () => {
        setActiveTab('month');
        let arr = moment(new Date()).format('YYYY-MM-DD').split('-');
        changePeriod(`${arr[0]}-${arr[1]}-${0}`)
    };

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={onDayPress}>
                    <View
                        style={[
                            styles.item,
                            {
                                backgroundColor:
                                    activeTab == 'day'
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
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 30,
        backgroundColor: colors.blue,
        borderColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 5,
    },
    item: {
        padding: 6,
        paddingHorizontal: 27,
        borderRadius: 30,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    text: {
        fontSize: 12,
    },
});

export default HeaderTab;
