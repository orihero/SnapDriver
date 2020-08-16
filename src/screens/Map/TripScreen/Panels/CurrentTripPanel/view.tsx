import React from 'react';
import HatCutout from "@components/common/HatCutout";
import colors from "@constants/colors";
import {Image, Text, View} from "react-native";
import images from "@assets/images";
import Icon from "@assets/icons";
import styles from "./styles";
import Button from "@components/common/Button";
import strings from "@constants/strings";

interface IProps {
    changeOrderStatus: () => void;
    isLoading: boolean;
}

const CurrentTripPanelView = ({changeOrderStatus, isLoading}: IProps) => {
    return (
        <View>
            <HatCutout style={styles.hatCutOut}/>
            <View style={styles.wrapper}>
                <View style={styles.dragIcon}/>
                <View style={styles.innerWrapper}>
                    <View style={styles.imgWrapper}>
                        <Image style={styles.img} source={images.location}/>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.info}>7 км - 15 мин в пути</Text>
                            <Text style={styles.text}>Саларская набережаная 35</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="path" size={25} color={colors.black}/>
                    </View>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="chat" size={25} color={colors.blue}/>
                    </View>
                    <View style={styles.bottomIconWrapper}>
                        <Icon name="noCar" size={25} color={colors.black}/>
                    </View>
                </View>
                <Button
                    onPress={changeOrderStatus}
                    text={strings.finish}
                    isLoading={isLoading}
                />
            </View>
        </View>
    );
};

export default CurrentTripPanelView;
