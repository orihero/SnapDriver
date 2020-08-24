import React from 'react';
import HatCutout from "@components/common/HatCutout";
import {Text, View} from "react-native";
import Icon from "@assets/icons";
import styles from "./styles";
import Button from "@components/common/Button";
import {strings} from "@constants/index";

interface IProps {
    changeOrderStatus: () => void;
    price: string;
}

const TripEndInfoPanelView = ({changeOrderStatus, price}: IProps) => {
    return (
        <View>
            <HatCutout style={styles.hatCutOut}/>
            <View style={styles.wrapper}>
                <View style={styles.innerWrapper}>
                    <Text style={styles.text}>Стоимость</Text>
                    <View style={styles.costTextWrapper}>
                        <Text style={styles.cost}>{price}</Text>
                        <Text style={styles.currency}>сум</Text>
                    </View>
                </View>
                <View style={styles.durationWrapper}>
                    <Text style={styles.text}>Время</Text>
                    <Text style={styles.text}>12 мин</Text>
                </View>
                <View style={styles.orderDetails}>
                    <Text style={styles.text}>Детали заказа</Text>
                    <Icon name="setting" size={18}/>
                </View>
                <Button
                    onPress={changeOrderStatus}
                    text={strings.finish}
                />
            </View>
        </View>
    );
};

export default TripEndInfoPanelView;
