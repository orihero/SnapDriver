import React from 'react';
import {View, ScrollView, TouchableWithoutFeedback, Text} from 'react-native'

import styles from "./styles";
import SCREENS from "@constants/screens";
// import TripItem from "../../components/TripItem/TripItem";
// import ArrowIcon from "../../assets/images/ArrowIcon";

const SupportScreenView = ({navigation}: any) => {
    return (
        <ScrollView style={styles.container}>
            {/*<TripItem/>*/}
            <View style={{marginHorizontal: 20}}>
                <Text style={{color: '#AAAEB7'}}>Дополнительные вопросы</Text>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SUPPORT_CATEGORY)}>
                    <View style={styles.item}>
                        <Text>Проблема с другим заказом</Text>
                        {/*<ArrowIcon/>*/}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SUPPORT_CATEGORY)}>
                    <View style={styles.item}>
                        <Text>В машине остались вещи</Text>
                        {/*<ArrowIcon/>*/}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SUPPORT_CATEGORY)}>
                    <View style={styles.item}>
                        <Text>Что то с деньгами</Text>
                        {/*<ArrowIcon/>*/}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SUPPORT_CATEGORY)}>
                    <View style={styles.item}>
                        <Text>Что то с деньгами</Text>
                        {/*<ArrowIcon/>*/}
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate(SCREENS.SUPPORT_CATEGORY)}>
                    <View style={styles.item}>
                        <Text>Хочу пожаловаться</Text>
                        {/*<ArrowIcon/>*/}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
};

export default SupportScreenView;
