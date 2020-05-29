import React, {useState} from 'react';
import {StyleSheet, Text, View, LayoutAnimation} from 'react-native';
import colors from '../../constants/colors';
import strings from '../../locales/strings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import constStyles from '../../constants/constStyles';

interface HeaderTabProps {
    filter?: boolean;
}

const HeaderTab = ({filter}: HeaderTabProps) => {
    let [activeTab, setActiveTab] = useState('day');
    let [activeFilter, setActiveFilter] = useState('skipped');
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

    const onDonePress = () => {
        setActiveFilter('done');
    };
    const onSkippedPress = () => {
        setActiveFilter('skipped');
    };
    const onCancelledPress = () => {
        setActiveFilter('cancelled');
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
            {filter && (
                <View style={styles.container}>
                    <TouchableOpacity onPress={onDonePress}>
                        <View
                            style={[
                                styles.item,
                                {
                                    backgroundColor:
                                        activeFilter == 'done'
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
                                            activeFilter == 'done'
                                                ? colors.blue
                                                : colors.white,
                                    },
                                ]}>
                                {strings.done}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSkippedPress}>
                        <View
                            style={[
                                styles.item,
                                {
                                    backgroundColor:
                                        activeFilter == 'skipped'
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
                                            activeFilter == 'skipped'
                                                ? colors.blue
                                                : colors.white,
                                    },
                                ]}>
                                {strings.skipped}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onCancelledPress}>
                        <View
                            style={[
                                styles.item,
                                {
                                    backgroundColor:
                                        activeFilter == 'cancelled'
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
                                            activeFilter == 'cancelled'
                                                ? colors.blue
                                                : colors.white,
                                    },
                                ]}>
                                {strings.cancelled}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </>
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
        marginBottom: 5,
    },
    item: {
        padding: 6,
        paddingHorizontal: 12,
        borderRadius: 30,
        backgroundColor: colors.white,
        overflow: 'hidden',
    },
    text: {
        fontSize: 12,
    },
});

export default HeaderTab;
