import React from 'react';
import HatCutout from "@components/common/HatCutout";
import {Text, View} from "react-native";
import styles from "./styles";
import Button from "@components/common/Button";
import {strings} from "@constants/index";

interface IProps {
    changeOrderStatus: () => void;
    newOrder: any
}

const TripEndInfoPanelView = ({changeOrderStatus, newOrder}: IProps) => {
    return (
        <View>
            <HatCutout style={styles.hatCutOut}/>
            <View style={styles.wrapper}>
                <View style={styles.innerWrapper}>
                    <Text style={styles.text}>Стоимость</Text>
                    <View style={styles.costTextWrapper}>
                        <Text style={styles.cost}>{newOrder.price}</Text>
                        <Text style={styles.currency}>сум</Text>
                    </View>
                </View>
                <View style={styles.durationWrapper}>
                    <Text style={styles.text}>Время</Text>
                    <Text style={styles.text}>12 мин</Text>
                </View>
                <View style={styles.durationWrapper}>
                    <Text style={styles.text}>Тариф</Text>
                    <Text style={styles.text}>{newOrder.rate && newOrder.rate.title}</Text>
                </View>
                {/*<View style={styles.orderDetails}>*/}
                {/*    <Text style={styles.text}>Детали заказа</Text>*/}
                {/*    <Icon name="setting" size={18}/>*/}
                {/*</View>*/}
                <Button
                    onPress={changeOrderStatus}
                    text={strings.finish as string}
                />
            </View>
        </View>
    );
};

export default TripEndInfoPanelView;
